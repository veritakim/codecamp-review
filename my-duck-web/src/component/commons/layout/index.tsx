import styled from "@emotion/styled";
import { ReactChild } from "react";
import Header from "./header";
import Navigator from "./navigator";

interface LayoutProps {
  children: ReactChild
}

const Body = styled.div`
  height: 800px;
`

export default function Layout (props: LayoutProps) {

  return (
    <>
      <Header />
      <Navigator />
      <Body>{props.children}</Body>
    </>
  )
}