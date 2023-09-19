import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FaChampagneGlasses } from "react-icons/fa6";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return <></>;
  const emojiMap: { [key: number]: JSX.Element } = {
    3: <FaChampagneGlasses color="yellow" />,
    4: <BsFillHandThumbsUpFill color="yellow" />,
    5: <BsFillEmojiHeartEyesFill color="pink" />,
  };

  return <>{emojiMap[rating_top]}</>;
};

export default Emoji;
