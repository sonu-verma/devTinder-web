import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import AboutUs from "./components/about-us/AboutUs"
import ContactUs from "./components/contact-us/ContactUs"

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/sign-up" element={<div>Signup</div>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
