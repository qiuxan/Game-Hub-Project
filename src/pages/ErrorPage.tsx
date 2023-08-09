import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../component/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5}>
        <NavBar />
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
