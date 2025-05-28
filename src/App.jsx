import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import AboutUs from "./components/about-us/AboutUs"
import ContactUs from "./components/contact-us/ContactUs"
import Login from "./components/login/Login"
import { Provider } from "react-redux"
import { appStore } from "./utils/appStore"
import Profile from "./components/profile/Profile"
import Error from "./components/Error"
import UpdateProfile from "./components/profile/UpdateProfile"
import Teams from "./components/teams/Teams"
import TeamCreate from "./components/teams/TeamCreate"
import TeamUpdate from "./components/teams/TeamUpdate"
import TeamConnection from "./components/connections/TeamConnection"
import MyConnection from "./components/connections/MyConnections"
import MyRequest from "./components/connections/MyRequest"
import Home from "./components/home/Home"
import TurfDetailPage from "./components/turf/TurfDetailPage"

function App() {

  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />} />
            <Route path="/me" element={<Profile /> } />
            <Route path="/me/update" element={<UpdateProfile /> } />
            <Route path="/login" element={<Login /> } />
            <Route path="/sign-up" element={<div>Signup</div>} />
            <Route path="/teams" element={ <Teams />} />
            <Route path="/team/create" element={ <TeamCreate />} />
            <Route path="/team/update/:teamId" element={<TeamUpdate />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/connections" element={<TeamConnection />} />
            <Route path="/my-connections" element={<MyConnection />} />
            <Route path="/my-request" element={<MyRequest />} />

            <Route path='/turf/:slug' element={<TurfDetailPage />} />

            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
