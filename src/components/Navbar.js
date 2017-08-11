import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import drop from './tint-drop.svg'

const StyledLink = styled(Link)`
	background: #20130C;
	color: lightgrey;
	transition: background 0.6s;
	transition-timing-function: ease;
  &:hover {
    background: white;
    color: #20130C;
  }
  &.primary {
    background: white;
    color: #20130C;
  }
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #20130C;
	border-radius: 4px;
	text-decoration: none;
`

const Icon = styled.img`height: 100px;`

export default props => {
  return (
    <div>
      <StyledLink to="/projects/" activeClassName="primary">
        projects
      </StyledLink>
      <StyledLink to="/index/" exact activeClassName="primary">
        about
      </StyledLink>
      <StyledLink to="/connect/" activeClassName="primary">
        connect
      </StyledLink>
    </div>
  )
}
