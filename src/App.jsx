import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Work from "./components/works/Work"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logo, setLogo] = useState(false);

  const showLogo = () => {
    if(window.scrollY >= 850) {
      setLogo(true);
    } else {
      setLogo(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showLogo);
  })
  


  return (
    <div className="app">
      <Topbar menuOpen = { menuOpen } setMenuOpen = { setMenuOpen } logo = { logo } setLogo = { setLogo }/>
      
      <Menu menuOpen = { menuOpen } setMenuOpen = { setMenuOpen }/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
      </div>
      <Contact />
    </div>
  );
}

export default App;
