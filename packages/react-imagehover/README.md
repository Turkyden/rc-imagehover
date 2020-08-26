# React ImageHover

A react components

封装鼠标经过/点击图层时，切换正反面的 UI 逻辑。

```html
<figure class="imghvr-reveal-right">
  <img src="https://jdc.jd.com/img/300x300" />
  <figcaption>
    <!-- Hover Content -->
  </figcaption>
</figure>
```

## Usage

````tsx
import { ImageHover } from 'react-imagehover';

<ImageHover.div>
  <div>
    // your front layer content
  </div>
  <div>
    // your back layer content
  </div>
</ImageHover.div>
```,

## Hook

```tsx
import { ImageHover, useImageHover } from 'react-imagehover';

function App() {

  const [frontStyle, backStyle] = useImageHover({
    effect: 'reveal-right',
    mode: 'hover',
    duration: 0.35,
    speed: 'fast'
  });

  return (
    <ImageHover.div>
      <div style={frontStyle}>
        // your front layer content
      </div>
      <div style={backStyle}>
        // your back layer content
      </div>
    </ImageHover.div>
  )
}
````
