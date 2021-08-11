import * as React from "react"
import Header from "./Header/header"
import { GlobalStyle } from "./styles/GlobalStyles";
import './styles/scss/index.scss';

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout;
