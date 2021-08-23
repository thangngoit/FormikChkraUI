import { Box, ChakraProvider, Heading, Link } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import Form from "./Form";

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <Heading as="h1" size="xl" textAlign="center">
      Formik Chakra UI
    </Heading>
    <Box as="p" textAlign="center">
      Example using{" "}
      <Link href="https://github.com/kgnugur/formik-chakra-ui" isExternal>
        Formik Chakra UI{" "}
      </Link>
    </Box>
    <Form />
  </ChakraProvider>,
  rootElement
);
