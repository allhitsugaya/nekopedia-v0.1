
import {ErrorBoundaries} from "../components/ErrorBoundaries/ErrorBoundaries.jsx";
import Layout from "../components/index.jsx"
import {Route, Routes} from "react-router";
import MainPage from "../pages/mainpage.jsx"
import ContactsPage from '../components/Info/Contact/Contact.jsx'
import AboutPage from '../components/Info/AboutUs/AboutUs.jsx'

function App() {

  return (
    <>
        <ErrorBoundaries>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="contact" element={<ContactsPage />} />
                    <Route path="about" element={<AboutPage />} />
                </Route>
            </Routes>
        </ErrorBoundaries>
    </>
  )
}

export default App
