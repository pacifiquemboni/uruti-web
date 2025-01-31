
import AboutApp from './component/aboutComp';
import Brands from './component/brands';
import Header from './component/header'
import NavBar from './component/navBar'
import './index.css';


function App() {


  return (
    <>
      <div>
        <NavBar />
        <Header />
        <Brands />
        <AboutApp />
      </div>
    </>
  )
}

export default App
