import { Heading } from "@chakra-ui/react";
import { GameParams } from "../hooks/useGame";

interface Props {
  gameParams: GameParams;
}

const HeadingGame = ({ gameParams }: Props) => {
  const heading = `${gameParams.genre?.name || ""} ${
    gameParams.platform?.name || ""
  } Games`;
  return <Heading marginY={2}>{heading}</Heading>;
};

export default HeadingGame;
