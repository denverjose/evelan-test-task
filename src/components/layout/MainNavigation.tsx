"use client";
import { Fragment } from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function MainNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Box bg={"gray.400"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
              >
                <Link href="/">Home</Link>
              </Box>
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
              >
                <Link href="/users">Users</Link>
              </Box>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
              >
                <Link href="/">Home</Link>
              </Box>
              <Box
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200",
                }}
              >
                <Link href="/users">Users</Link>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Fragment>
  );
}
