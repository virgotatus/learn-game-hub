import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  setGenre: (genre: Genre) => void;
}

const AsideBar = ({ selectedGenre, setGenre: setGenreName }: Props) => {
  const { genres, error, isLoading } = useGenres();
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginY={1}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="30px"
                borderRadius="3"
                objectFit="cover"
                src={genre.image_background}
              />
              <Button
                whiteSpace="pre-wrap"
                textAlign="left"
                onClick={() => {
                  setGenreName(genre);
                }}
                fontWeight={
                  genre.slug === selectedGenre?.slug ? "bold" : "normal"
                }
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AsideBar;
