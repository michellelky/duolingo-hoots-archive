import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Layout,
  Section,
  Bottom,
  ProgressBar,
  Status,
  AbsView,
  BaseView,
} from "../components";
import { ButtonVariant } from "../components/Button";
import {
  Body,
  DialogBubble,
  Heading,
  HootInput,
  Spacer,
  FinishBlock,
} from "../components/HootSession";

const MIN_COUNT = 70;
const MAX_COUNT = 130;

type TextHints = { text: string; hint: string }[];

type ComponentType = {
  label: string;
  type: string;
  variant?: ButtonVariant;
  success?: boolean;
};

export default function HootSession() {
  const params = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState<{
    question: string;
    questionWithHints: TextHints;
    characterAvatar: string;
    promptTTSUrl: string;
  }>({
    question: "",
    questionWithHints: [],
    characterAvatar: "",
    promptTTSUrl: "",
  });
  const [exampleResponses, setExResponse] = useState<
    {
      id: number;
      text: string;
      textWithHints: TextHints;
      ttsUrl: string;
      avatar: string;
    }[]
  >([]);
  const [userResponse, setUserResponse] = useState("");
  const [userStep, setUserStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const STEPS = {
    START: 1,
    END: exampleResponses.length + 3,
  };

  useEffect(() => {
    const parseHint = (text: string) => {
      let bracketRegex = /\{(.*?)\}/g;
      let blockRegex = /(?=\{)|(?<=\})/g;
      let textArr = text.split(blockRegex);

      let displayArr: TextHints = [];
      let displayLine: string[] = [];

      textArr.forEach((chunk) => {
        if (chunk.match(bracketRegex)) {
          let bilingual = chunk.replace("{", "").replace("}", "").split("/");
          let targetText = bilingual[0];
          let engText = bilingual[1];

          displayArr.push({
            text: targetText,
            hint: engText ? engText : "",
          });
        } else {
          displayArr.push({
            text: chunk,
            hint: "",
          });
        }
      });

      displayArr.forEach((d) => displayLine.push(d.text));

      return {
        line: displayLine.join(""),
        lineWithHints: displayArr,
      };
    };

    const parseExample = (responses: any, users: any) => {
      let test: any[] = Object.values(responses.byId);

      return test.map((res) => {
        const { line, lineWithHints } = parseHint(res.responseText.text);
        return {
          id: res.id,
          text: line,
          textWithHints: lineWithHints,
          ttsUrl: res.ttsUrl,
          avatar: users.byId[`character-${res.userId}`].picture,
        };
      });
    };

    const fetchJSON = (dateStr: string) => {
      import(`../data/${dateStr}/prompt.json`)
        .then((data) => {
          const { line, lineWithHints } = parseHint(data.promptText.text);
          setPrompt({
            question: line,
            questionWithHints: lineWithHints,
            characterAvatar: data.characterAvatar,
            promptTTSUrl: data.promptTTSUrl,
          });

          const examples = parseExample(data.responses, data.users);
          setExResponse(examples);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    if (params.date) {
      fetchJSON(params.date);
    }
  }, [params]);

  useEffect(() => {
    if (userStep === STEPS.END + 2) {
      const audio = new Audio("/audio/2aae0ea735c8e9ed884107d6f0a09e35.mp3");
      audio.play();
    }
  }, [STEPS.END, userStep]);

  const getBottomStatus: () => ComponentType[] = () => {
    if (userStep === STEPS.END - 1) {
      return [
        {
          label: "Check Grammar",
          type: "button",
        },
      ];
    }
    if (userStep === STEPS.END) {
      return [
        {
          label: "Edit",
          variant: "secondary",
          type: "button",
        },
        {
          label: "Continue",
          type: "button",
        },
      ];
    }
    if (userStep === STEPS.END + 1) {
      return [
        {
          label: "Great job!",
          type: "status",
          success: true,
        },
        {
          label: "Continue",
          type: "button",
        },
      ];
    }
    return [
      {
        label: "Continue",
        variant: "primary",
        type: "button",
      },
    ];
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 300);
  };

  const onClickBtn = (label?: string) => {
    const onClickNext = () => {
      if (userStep === STEPS.END) {
        // simulate submit
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsSubmited(true);
          setUserStep((prev) => prev + 1);
        }, 1500);
      } else if (userStep === STEPS.END + 2) {
        navigate("/", { replace: true });
      } else {
        setUserStep((prev) => prev + 1);
        scrollToBottom();
      }
    };

    if (label && label === "Edit") {
      setUserStep((prev) => prev - 1);
    } else {
      onClickNext();
    }
  };

  if (prompt.question !== "") {
    return (
      <AbsView>
        <BaseView>
          <ProgressBar current={userResponse.length} finish={MIN_COUNT} />
          <Layout>
            <div>
              <Section>
                <Heading>Today's prompt</Heading>
                <DialogBubble
                  text={prompt.question}
                  avatar={prompt.characterAvatar}
                  audioUrl={prompt.promptTTSUrl}
                />
              </Section>

              <Section visible={exampleResponses.length !== 0 && userStep > 1}>
                <Heading>Example responses</Heading>
                {exampleResponses.map((e, i) => (
                  <DialogBubble
                    key={e.id}
                    text={e.text}
                    avatar={e.avatar}
                    audioUrl={e.ttsUrl}
                    visible={userStep - 2 >= i}
                  />
                ))}
              </Section>

              <Section
                visible={
                  exampleResponses.length !== 0
                    ? userStep > exampleResponses.length + 1
                    : userStep === 2
                }
              >
                <Heading>
                  {userStep === exampleResponses.length + 2
                    ? "Your turn to respond!"
                    : "Review your corrections"}
                </Heading>
                <Body>{prompt.question}</Body>
                <HootInput
                  value={userResponse}
                  onTextChange={(val) => setUserResponse(val)}
                  wordCount={userResponse.length}
                  min={MIN_COUNT}
                  max={MAX_COUNT}
                  editable={userStep < STEPS.END}
                />
              </Section>

              <Section visible={userStep === STEPS.END + 2}>
                <FinishBlock
                  title="You’ve reached your daily goal"
                  subtitle="Prompt Complete!"
                  xp={10}
                />
              </Section>

              <Spacer visible={userStep !== STEPS.END + 2} />
            </div>
          </Layout>

          <Bottom success={isSubmited && userStep === STEPS.END + 1}>
            {getBottomStatus().map((c: ComponentType) => {
              if (c.type === "status") {
                return (
                  <Status
                    key={`${c.label}`}
                    label={c.label}
                    success={c.success}
                  />
                );
              }
              return (
                <Button
                  key={`${c.label}`}
                  loading={isLoading}
                  disabled={
                    isLoading ||
                    (userStep === 2 + exampleResponses.length &&
                      userResponse.length < MIN_COUNT)
                  }
                  variant={c.variant}
                  onClick={() => onClickBtn(c.label)}
                >
                  {c.label}
                </Button>
              );
            })}
          </Bottom>
        </BaseView>
      </AbsView>
    );
  }
  return null;
}
