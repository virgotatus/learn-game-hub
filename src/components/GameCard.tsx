import { Game } from "../services/GameService";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";

interface Props {
  children: Game;
}

const GameCard = ({ children }: Props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Image src={children.background_image} height="200px" />
          <Stack mt="6" spacing="3">
            <HStack justifyContent="space-between">
              <PlatformIcon
                platforms={children.parent_platforms.map(
                  ({ platform }) => platform
                )}
              />
              <CriticScore score={children.metacritic} />
            </HStack>
            <Heading size="md">{children.name}</Heading>
          </Stack>
        </CardBody>
        {/* <Divider /> */}
        <CardFooter>
          <Button variant="solid" colorScheme="gray">
            +{children.ratings_count}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GameCard;
