import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend", "Backend", "Blockchain"]
    })
  }, [])

  return (
    <div className='intro' id="intro">
      <div className="above">
        <div className="left">
          <h4>Hi! I'm</h4>
          <h1>Harry.</h1>
        </div>
        <div className="right">
          <div className="scroll">
            <a href="#portfolio">
              <p>SCROLL DOWN</p>
              <img src="assets/downarrow.png" alt="" />
            </a>
          </div>
        </div>
        
      </div>
      <div className="below">
        <div className="left">
          <h2><span ref={ textRef }></span> Programmer;</h2>
          <h2>Designer;</h2>
          <p>vutruong1772@gmail.com</p>
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  )
}
