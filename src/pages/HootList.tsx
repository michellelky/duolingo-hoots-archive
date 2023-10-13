import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Checkbox, Layout } from "../components";
import { HootHeader, HootListItem } from "../components/HootList";
import data from "../data/prompts.json";

export default function HootIndex() {
  const [searchParams, setSearchParams] = useSearchParams({
    prompt: "",
  });
  const filterOn = searchParams.get("prompt") === "available";
  const [filteredList, setFilteredList] = useState<any[]>([]);

  useEffect(() => {
    // Use the first item as demo
    const getPromptsWithData = () => {
      const DATES = ["2022-03-25", "2022-03-26", "2022-03-28", "2022-03-29"];

      return data.prompts
        .filter((item) =>
          DATES.includes(getDate(item.date).toLocaleDateString("en-CA")),
        )
        .map((p, i) => ({ ...p, completed: false, demo: true }));
    };

    let prompts = [];

    if (filterOn) {
      prompts = getPromptsWithData();
    } else {
      prompts = data.prompts.sort((a, b) => b.id - a.id);
    }

    setFilteredList(prompts);
  }, [filterOn]);

  const updateFilter = () => {
    setSearchParams(filterOn ? {} : { prompt: "available" }, { replace: true });
  };

  const getCharacterImage = (name: string, completed: boolean) => {
    let filename = name.toLowerCase();
    if (completed) {
      filename += "-gilded";
    } else {
      filename += "-active";
    }
    return `${process.env.PUBLIC_URL}/images/prompt-characters/${filename}.svg`;
  };

  const getDate = (dateObj: { date: number; month: number; year: number }) => {
    const { date, month, year } = dateObj;

    const convertFormat = (val: number) => {
      return val.toString().length === 1 ? `0${val}` : val;
    };
    const promptDate = new Date(
      `${year}-${convertFormat(month)}-${convertFormat(date)}`,
    );
    return promptDate;
  };

  return (
    <Layout>
      <HootHeader />
      <Checkbox
        label="Show available prompt only"
        isChecked={filterOn}
        onChange={() => updateFilter()}
      />

      {filteredList.map((p, i) => (
        <HootListItem
          key={p.id}
          id={p.id}
          dateObj={getDate(p.date)}
          question={p.text}
          translation={p.translation}
          answer={p.response?.text}
          character={p.character}
          characterImg={getCharacterImage(p.character.name, p.completed)}
          completed={p.completed}
          isToday={i === 0}
          isDemo={p.demo}
        />
      ))}
    </Layout>
  );
}
