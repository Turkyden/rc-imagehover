import { css } from '@emotion/core'

export default () =>
  css({
    position: 'relative',
    display: 'inline-block',
    margin: 0,
    maxWidth: '100%',
    backgroundColor: '#2266a5',
    color: '#ffffff',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    fontSmoothing: 'grayscale',
    transform: 'translateZ(0)',
    boxSizing: 'border-box',
    transition: 'all 0.35s ease',
    '&:before': {
      boxSizing: 'border-box',
      transition: 'all 0.35s ease'
    },
    '&:after': {
      boxSizing: 'border-box',
      transition: 'all 0.35s ease'
    },
    '& *': {
      boxSizing: 'border-box',
      transition: 'all 0.35s ease',
      '&:before': {
        boxSizing: 'border-box',
        transition: 'all 0.35s ease'
      },
      '&:after': {
        boxSizing: 'border-box',
        transition: 'all 0.35s ease'
      }
    },
    '&:hover figcaption': {
      opacity: 1,
      transform: 'translate(0, 0)'
    },
    '&:hover img': {
      transform: 'translate(0, 0)'
    }
  })
