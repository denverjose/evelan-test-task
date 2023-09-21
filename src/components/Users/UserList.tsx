import React, { useState } from "react";

import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Flex,
  TableContainer,
} from "@chakra-ui/react";
import { IUser } from "../../interfaces";
import { useRouter } from "next/router";

type Props = {
  users: IUser[];
};

const UserList: React.FC<Props> = ({ users }) => {
  const [usersList, setUsersList] = useState(users);
  //set the nextPage state for future pagination
  const [nextPage, setNextPage] = useState(2);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Load More");

  const router = useRouter();

  const handleOnclick = async () => {
    const updatedUsersList: IUser[] = [];
    const data = await fetch(`https://reqres.in/api/users?page=${nextPage}`);
    const results = await data.json();
    usersList.map((user: IUser) => {
      updatedUsersList.push(user);
    });

    results.data.map((user: IUser) => {
      updatedUsersList.push(user);
    });

    setUsersList(updatedUsersList);

    if (results.page == results.total_pages) {
      setButtonText("No more users to load");
      setButtonDisable(true);
    }
    //
    setNextPage(nextPage + 1);
  };

  const showDetailsHandler = (userId: number) =>
    router.push(`/users/${userId}`);

  return (
    <TableContainer>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Avatar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {usersList.map((user) => (
            <Tr
              key={user.id}
              onClick={() => showDetailsHandler(user.id)}
              _hover={{
                cursor: "pointer",
                background: "gray.500",
              }}
            >
              <Td isNumeric>{user.id}</Td>
              <Td>{user.first_name}</Td>
              <Td>{user.last_name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Avatar name={user.first_name} src={user.avatar} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex justify="center" my="2">
        <Button
          colorScheme={!buttonDisable ? "blue" : "gray"}
          size="lg"
          variant="solid"
          onClick={handleOnclick}
          isDisabled={buttonDisable}
        >
          {buttonText}
        </Button>
      </Flex>
    </TableContainer>
  );
};

export default UserList;
