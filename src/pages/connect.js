import React from 'react'
import Link from 'gatsby-link'
import Github from '../components/github.svg'
import Linkedin from '../components/linkedin.svg'
import Twitter from '../components/twitter.svg'
import styled from 'styled-components'

const SocialLink = styled.img`
  flex: 1;
  height: 75px;
`
const ConnectPage = () =>
  <div
    style={{
      display: 'flex',
      maxWidth: '600px',
      margin: 'auto',
      justifyContent: 'center',
    }}
  >
    <a style={{ margin: '10px' }} href="https://www.github.com/vpicone">
      <img src={Github} style={{ height: '75px' }} />
    </a>
    <a style={{ margin: '10px' }} href="https://www.twitter.com/TheElodin">
      <img src={Twitter} style={{ height: '75px' }} />
    </a>
    <a
      style={{ margin: '10px' }}
      href="https://www.linkedin.com/in/vincentpicone/"
    >
      <img src={Linkedin} style={{ height: '75px' }} />
    </a>
  </div>

export default ConnectPage
