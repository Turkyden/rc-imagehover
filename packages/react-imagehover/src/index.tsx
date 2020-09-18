/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { ReactElement } from 'react'

interface ImageHoverProps {
  children: Array<ReactElement>
}

const base = css`
  position: relative;
  display: inline-block;
  background-color: #2266a5;
  color: #fff;
  overflow: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  img {
    vertical-align: top;
    max-width: 100%;
  }

  figcaption {
    background-color: #135796;
    padding: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &,
  & *,
  &:before {
    box-sizing: border-box;
    transition: all 0.35s ease;
  }
`

const reveal = css`
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    background-color: #135796;
  }

  figcaption {
    opacity: 0;
  }

  &:hover:before {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  &:hover figcaption {
    opacity: 1;
    transition-delay: 0.21s;
  }
`

const imghoverStyle = css`
  ${base};

  ${reveal};

  /** reveal-right **/
  &:before {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`

interface ImageHoverProps {
  effect: string
  duration?: number
  speed?: number
  children: Array<ReactElement>
}

export default function ImageHover(props: ImageHoverProps) {
  const { effect, duration, speed, children } = props

  return <figure css={imghoverStyle}>{...children}</figure>
}
