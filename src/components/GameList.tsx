import { HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames, { GameParams } from "../hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import PlatformSelector from "./PlatformSelector";
import { useState } from "react";
import SortSelector from "./SortSelector";

interface Props {
  gameparams: GameParams;
  onChangePlatform: (platform: string) => void;
}

const GameList = ({ gameparams, onChangePlatform }: Props) => {
  const { games, error, isLoading } = useGames({
    genreName: gameparams.genreName,
    platforms: gameparams.platforms,
    ordering: gameparams.ordering,
  });
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="20px">
          {skeleton.map((sk) => (
            <CardContainer key={sk}>
              <CardSkeleton />
            </CardContainer>
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="20px">
        {games.map((game) => (
          <CardContainer key={game.id}>
            <GameCard>{game}</GameCard>
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
