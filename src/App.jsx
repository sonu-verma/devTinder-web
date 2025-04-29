import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import AboutUs from "./components/about-us/AboutUs"
import ContactUs from "./components/contact-us/ContactUs"
import Login from "./components/login/Login"
import { Provider } from "react-redux"
import { appStore } from "./utils/appStore"
import Profile from "./components/profile/Profile"
import Error from "./components/Error"

function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/me" element={<Profile /> } />
            <Route path="/login" element={<Login /> } />
            <Route path="/sign-up" element={<div>Signup</div>} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
