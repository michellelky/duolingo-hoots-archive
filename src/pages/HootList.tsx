import { Layout } from "../components";
import { HootHeader, HootListItem } from "../components/HootList";
import data from "../data/prompts.json";

export default function HootIndex() {
  const getCharacterImage = (name: string, completed: boolean) => {
    let filename = name.toLowerCase();
    if (completed) {
      filename += "-gilded";
    } else {
      filename += "-active";
    }
    return `/images/prompt-characters/${filename}.svg`;
  };

  const getDate = (dateObj: { date: number; month: number; year: number }) => {
    const { date, month, year } = dateObj;
    const promptDate = new Date(`${year}-${month}-${date}`);
    return promptDate;
  };

  return (
    <Layout>
      <HootHeader />

      {data.prompts
        .sort((a, b) => b.id - a.id)
        .map((p, i) => (
          <HootListItem
            key={p.id}
            id={p.id}
            dateObj={getDate(p.date)}
            question={p.text}
            answer={p.response?.text}
            character={p.character}
            characterImg={getCharacterImage(p.character.name, p.completed)}
            completed={p.completed}
            isToday={i === 0}
          />
        ))}
    </Layout>
  );
}
