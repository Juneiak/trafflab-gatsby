import * as React from "react"

export default function MediaImage({ image, image480, alt }) {
  return (
    <picture style={{height: "100%"}}>
      {image480 && <source media='(max-width: 480px)' srcSet={image480} />}
      <img src={image} alt={alt} style={{height: '100%', width: '100%'}} />
    </picture>
  )
}