import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const crisis_color = (crisis: number) => {
    if (crisis > 85) {
      return "green";
    } else if (crisis > 60) {
      return "yellow";
    } else {
      return "gray";
    }
  };

  return (
    <Badge ml="1" colorScheme={crisis_color(score)} as="b" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
