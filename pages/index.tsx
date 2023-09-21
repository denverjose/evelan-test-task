import { Fragment } from "react";
import Head from "next/head";
import HomePageContent from "@/src/components/Home/HomePageContent";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Evelan Test Task"
          key="Evelan Test Task"
        />
      </Head>
      <HomePageContent />
    </Fragment>
  );
}
