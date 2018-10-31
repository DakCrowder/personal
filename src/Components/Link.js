import React from 'react'
import styled from 'styled-components'

function Link (props) {
  return (
    <a className={props.className} href={props.href} target="_blank">{props.children}</a>
  )
}

export default styled(Link)`
  color: ${props => props.theme.primary}
`;