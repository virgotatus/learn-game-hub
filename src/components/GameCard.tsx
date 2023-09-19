import { Game } from "../services/GameService";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

interface Props {
  children: Game;
}

const GameCard = ({ children }: Props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Image
            src={children.background_image}
            height="200px"
            objectFit="cover"
          />
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
          <Emoji rating_top={children.rating_top} />
          <Badge marginLeft={3}>+{children.ratings_count}</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GameCard;
