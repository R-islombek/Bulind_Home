
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Service from './Components/Service/Service'
import Section from './Components/Section/Section'
import Main from './Components/Main/Main'
import Project from './Components/Project/Project'
import News from './Components/News/News'
import Partners from './Components/Partners/Partners'
import About from './Components/About/About'
import Message from './Components/Message/Message'
import Footer from './Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'


function App() {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem('i18nextLng')
  const handleChange = (event) => {
  const selectedLaungage = event.target.value;
  i18n.changeLanguage(selectedLaungage)
}

 

 

  return (
    <>
      <Navbar/>
    <Header/>
    <Service/>
    <Section/>
    <Main/>
    <Project/>
    <News/>
    <Partners/>
    <About/>
    <Message/>
    <Footer/>
    </>
  )
}

export default App
