import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "./pages/Homepage"
import AppLayout from "./AppLayout"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
