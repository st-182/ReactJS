import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import image from "../images/react.png"

const flex = `
    display: flex;
    justify-content: center;
    align-items: center;
    `

const StyledHeader = styled.header`
  background-color: white;
  ${flex}
  div {
    ${flex}
    width: 10%;
    img {
      max-width: 50%;
      margin: 0 auto;
    }
  }
  ul {
    ${flex}
    gap: 10px;
    li {
      list-style: none;
      a {
        text-decoration: none;
      }
    }
  }
`

// const MoreStyle = styled(StyledHeader)`
//   background-color: black;
// `

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <StyledHeader>
      <div>
        <p>{title}</p>
        <img src={image} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/posts/categories">Categories</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
