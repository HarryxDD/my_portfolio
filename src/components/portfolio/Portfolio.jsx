import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="left">
      <div className="quote">
          <h1>"Experience is the name everyone gives to their mistakes"</h1>
        </div>
        <div className="arrowdown">
          <div className="scroll">
            <a href="#work">
              <p>Check out his projects</p>
              <img src="assets/downarrow.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="above">
          <img src="assets/cheems1.png" alt="" />
        </div>
        <div className="below">
        <p>A studious and team player sophomore who are seeking an internship <span className="boldText">to gain experience in the IT field</span> while <span className="boldText">committing himself towards the company's success.</span></p>
        <h4><span className="underlineText">Read more about him</span></h4>
        </div>  
      </div>
      
    </div>
  )
}
