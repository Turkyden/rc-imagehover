/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { ReactElement, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import useImageHover from './hooks'
import styles from './styles'

interface ImageHoverProps {
  children: Array<ReactElement>
}

export default function ImageHover(props: ImageHoverProps) {
  // const props = useSpring({opacity: 1, from: {opacity: 0}})
  // return <animated.div style={props}>I will fade in</animated.div>
  const ImageCom = props.children[0]

  const FigcaptionCom = props.children[1]

  // const Image = React.forwardRef((props, ref) => (
  //   <ImageCom ref={ref} >
  //     {props.children}
  //   </ImageCom>
  // ));

  const ref = useRef()

  return (
    <React.Fragment>
      <figure css={styles.figure}>
        {/* <Image ref={ref}>Click me!</Image> */}
        {FigcaptionCom}
      </figure>
    </React.Fragment>
  )
}

export { useImageHover }
