import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSetSearchText: (SearchText: string) => void;
}

const SearchInput = ({ onSetSearchText }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSetSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input ref={ref} placeholder="Search Game" variant="filled"></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
