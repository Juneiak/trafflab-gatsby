import React from "react";

export default function useMediaMatch(media) {
  const [isMatch, setIsMatch] = React.useState(false);

  React.useLayoutEffect(() => {
    const handleMediaChange = (evt) => {
      if (evt.matches !== isMatch) setIsMatch(evt.matches)
    }
    const mediaQuire = window.matchMedia(media);
    handleMediaChange(mediaQuire)
    mediaQuire.addEventListener('change', handleMediaChange)
    
    return () => mediaQuire.removeEventListener('change', handleMediaChange)
  }, []);

  return isMatch;
}