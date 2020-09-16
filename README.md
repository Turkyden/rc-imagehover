# React ImageHover

## Usage

```tsx
import { ImageHover } from 'react-imagehover'

function App() {
  const setting = {
    effect: 'reveal-right',
    duration: 0.35,
    speed: 'fast'
  }

  return (
    <ImageHover {...setting}>
      <div>// your front layer content</div>
      <div>// your back layer content</div>
    </ImageHover>
  )
}
```

## Hook

You can use the animated effect by react hook like this:

```tsx
import { ImageHover, useImageHover } from 'react-imagehover'

function App() {
  const [frontProps, backProps] = useImageHover({
    effect: 'reveal-right',
    mode: 'hover',
    duration: 0.35,
    speed: 'fast'
  })

  return (
    <ImageHover.div>
      <div {...frontProps}>// your front layer content</div>
      <div {...backProps}>// your back layer content</div>
    </ImageHover.div>
  )
}
```
