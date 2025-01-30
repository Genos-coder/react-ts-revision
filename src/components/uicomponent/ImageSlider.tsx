import { useRef } from "react"

function ImageSlider() {
    const refContainer = useRef<Map<string, HTMLElement>>(new Map());
  return (
    <div>ImageSlider</div>
  )
}
export default ImageSlider