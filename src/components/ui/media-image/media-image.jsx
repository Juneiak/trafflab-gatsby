import * as React from "react"
import plug from '../../../images/misc/plug.svg';

export default function MediaImage({ image, image480, no480, alt }) {
  return (
    <picture style={{height: "100%"}}>
      {(image480 || no480) && <source media='(max-width: 480px)' srcSet={no480 ? plug : image480} />}
      <img src={image} alt={alt} style={{height: '100%', width: '100%'}} />
    </picture>
  )
}