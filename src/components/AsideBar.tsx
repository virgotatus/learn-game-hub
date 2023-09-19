import {
  Button,
  HStack,
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
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="30px"
                borderRadius="3"
                src={genre.image_background}
              />
              <Button
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
