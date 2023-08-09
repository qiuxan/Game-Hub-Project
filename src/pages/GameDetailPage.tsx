import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../component/ExpandableText";
import DefinitionItem from "../component/DefinitionItem";
import CriticScore from "../component/CriticScore";
import GameAttributes from "../component/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading || !game) return <Spinner />;

  if (error) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
