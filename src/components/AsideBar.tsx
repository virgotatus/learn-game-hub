import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  selectedGenre: string | null;
  setGenreName: (name: string) => void;
}

const AsideBar = ({ selectedGenre, setGenreName }: Props) => {
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
                  setGenreName(genre.slug);
                }}
                fontWeight={genre.slug === selectedGenre ? "bold" : "normal"}
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
