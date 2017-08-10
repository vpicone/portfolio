import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const pages = ["projects", "about", "connect"]


const StyledLink = styled(Link)
`
	background: #20130C;
	color: white;

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid #20130C;
	border-radius: 3px;
	text-decoration: none;
`;



export default (props) => {

	return (
		<div>
		<StyledLink exact to={`/`} activeStyle={{background:'white', color:'#20130C'}}>home</StyledLink>
        {pages.map((page) => (
            <StyledLink to={`/${page}/`} activeStyle={{background:'white', color:'#20130C'}}>{page}</StyledLink>
        ))}
        </div>
	);
}
