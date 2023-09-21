import { GetStaticProps } from "next";
import React, { Fragment } from "react";
import { IUser } from "../../src/interfaces";
import UserList from "@/src/components/Users/UserList";
import Head from "next/head";

type Props = {
  users: IUser[];
};

const UserPage: React.FC<Props> = ({ users }) => {
  return (
    <Fragment>
      <Head>
        <title>Users</title>
        <meta
          name="description"
          content="Browse a list of users!"
          key="users"
        />
      </Head>
      <UserList users={users} />
    </Fragment>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=1`);
    if (!response.ok) {
      return { notFound: true };
    }
    const results = await response.json();
    return {
      props: {
        users: results.data || [],
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default UserPage;
