import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../components/Global.style"
import Layout from "../components/layout"

//image
import image from "../images/react.png"

const DivElement = styled.div`
  background-color: white;
  margin: 0 auto;
  p {
    color: violet;
  }
`

export default function Home() {
  return (
    <Layout>
      <GlobalStyle />
      <DivElement>
        <h1>Hello world!</h1>
        <p>This is my first gatsby project.</p>
        <img src={image} alt="react" />
      </DivElement>
    </Layout>
  )
}
