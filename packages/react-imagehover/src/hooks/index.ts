import React, { useRef } from 'React'

interface useImageHover {
  effect: string
  mode: string
  duration: number
  speed: string
}

export default function useImageHover({
  effect,
  mode,
  duration,
  speed
}: useImageHover) {
  const frontProps = {
    ref: useRef(),
    style: {}
  }

  const backProps = {
    ref: useRef(),
    style: {}
  }

  return [frontProps, backProps]
}
