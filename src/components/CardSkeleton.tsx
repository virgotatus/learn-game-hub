import {
  Card,
  CardBody,
  CardFooter,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card>
      <CardBody></CardBody>
      <Skeleton height="200px" />
      <SkeletonText height="200px" />
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardSkeleton;
