import { Button, List, ListItem } from "@chakra-ui/react";
import React from "react";
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
          <ListItem key={genre.id}>
            <Button
              onClick={() => {
                setGenreName(genre.slug);
              }}
            >
              {genre.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AsideBar;
