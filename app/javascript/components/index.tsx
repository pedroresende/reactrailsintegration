import React from "react"
import { createRoot } from "react-dom/client"
import Home from "./Home"

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.getElementById("react")!)
  )

  root.render(<Home />)
})
