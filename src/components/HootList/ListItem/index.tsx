import CompletedItem from "./CompletedItem";
import MissedItem from "./MissedItem";
import NewItem from "./NewItem";

export interface HootListItemProps {
  id: number;
  dateObj: Date;
  question: string;
  translation: string;
  character: {
    id: number;
    gender: string;
    name: string;
    backgroundColor: string;
    lipColor: string;
  };
  answer?: string;
  characterImg: string;
  completed: boolean;
  isToday: boolean;
  isDemo: boolean;
}

export default function HootListItem(props: HootListItemProps) {
  const { completed, isToday, isDemo } = props;
  if (completed) {
    return <CompletedItem {...props} />;
  }
  if (!isToday && !isDemo) {
    return <MissedItem {...props} />;
  }
  return <NewItem {...props} />;
}
