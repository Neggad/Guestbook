import React from 'react';

export default function Icon(props) {
  return (
    <span
      className={`icon ${props.opacity || 'opaqueIcon'}`}
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>)
}