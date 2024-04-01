import Navbar from './components/nav/navbar'
import Header from './components/header/header'
import AboutUs from './components/aboutUs/aboutUs'

// import logo from "./assets/Grand_Capital.png"


import './App.scss'

function App() {

  return (
      <div className='App'>
          <Navbar/>       
          <Header/>
          <AboutUs/>
      </div>
  )
}

export default App
