import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen, logo, setLogo }) {


    return (
        <div className={"topbar " + (menuOpen && "act")}>
            <div className="wrapper">
                <div className="left">
                    <h1 ><a className={"logo " + (logo && "active")} href="#intro">harry.</a></h1>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
                          <span className="line1"></span>
                          <span className="line2"></span>
                          <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
