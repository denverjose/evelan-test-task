import { GetStaticPaths, GetStaticProps } from "next";
import { IUser } from "@/src/interfaces";
import { Fragment } from "react";
import UserDetail from "@/src/components/Users/UserDetail";
import Head from "next/head";

type Props = {
  user: IUser | null;
};

const UserViewPage: React.FC<Props> = ({ user }) => {
  return (
    <Fragment>
      <Head>
        <title>{user?.first_name}</title>
        <meta name="description" content={user?.email} key={user?.id} />
      </Head>
      <UserDetail user={user} />
    </Fragment>
  );
};

export default UserViewPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://reqres.in/api/users?per_page=12`);
  const results = await response.json();

  const paths = results?.data.map((result: IUser) => {
    return {
      params: { id: String(result.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const userId = context.params?.id;
    let results = null;

    if (userId) {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      if (!response.ok) {
        return { notFound: true };
      }
      results = await response.json();
    }

    return {
      props: {
        user: results?.data,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};
