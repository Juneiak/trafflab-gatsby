import * as React from "react"

export default function useMediaMatch(media) {
  const [ isMatch, setIsMatch ] = React.useState(false);

  React.useEffect(() => {
    const handleMediaChange = (evt) => {
      if (evt.matches !== isMatch) setIsMatch(evt.matches)
    }
    const mediaQuire = window.matchMedia(media);
    mediaQuire.addEventListener('change', handleMediaChange)
    return () => mediaQuire.removeEventListener('change', handleMediaChange)
  }, [media])

  return isMatch
}