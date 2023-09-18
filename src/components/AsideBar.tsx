import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  setGenreName: (name: string) => void;
}

const AsideBar = ({ setGenreName }: Props) => {
  const { genres, error, isLoading } = useGenres();
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
