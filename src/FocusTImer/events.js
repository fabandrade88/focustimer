import { controls } from "./elements"
export function registerControls() {
  controls.addEventListener('click', (event) => {
    console.log(event.target)
  })
}