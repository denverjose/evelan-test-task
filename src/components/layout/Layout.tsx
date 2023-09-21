import { Fragment, ReactNode } from "react";

import MainNavigation from "./MainNavigation";

import { Container } from "@chakra-ui/react";
interface Props {
  children?: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <Container my="3" maxW="5xl" centerContent>
        {children}
      </Container>
    </Fragment>
  );
};

export default Layout;
