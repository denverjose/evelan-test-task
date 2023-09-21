import { Heading, Avatar, Box, Flex, Text, Stack } from "@chakra-ui/react";

import { IUser } from "../../interfaces";

type Props = {
  user: IUser | null;
};

const UserDetail: React.FC<Props> = ({ user }) => {
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"md"}
      mt="12"
    >
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"xl"}
          src={user?.avatar}
          css={{
            border: "2px solid white",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {user?.first_name} {user?.last_name}
          </Heading>
          <Text color={"gray.500"}>{user?.email}</Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default UserDetail;
