/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './styles'

export default function ImageHover() {
  // const props = useSpring({opacity: 1, from: {opacity: 0}})
  // return <animated.div style={props}>I will fade in</animated.div>

  return (
    <React.Fragment>
      <figure css={styles.figure}>
        <img src="https://jdc.jd.com/img/200x200" css={styles.img} />

        <figcaption css={styles.figcaption}>Hello World !</figcaption>
      </figure>
    </React.Fragment>
  )
}
