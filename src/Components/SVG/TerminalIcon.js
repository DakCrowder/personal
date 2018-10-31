import React from 'react'
export default function TerminalIcon(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 16 16">
      <path class="terminal-line" fill="#000000" d="M6 12h9v1h-9v-1z"></path>
      <path class="terminal-arrow" fill="#000000" d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path>
    </svg>
  )
}