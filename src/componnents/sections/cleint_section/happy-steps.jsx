import "../css/happy-steps.css"

function HappySteps() {
  return (
    <div>
        <div className="happy-steps">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
        </div>
        <div className="col-lg-12">
          <div className="steps">
            <div className="row element ">
              <div className="col-lg-3 happy">
                <div className="item">
                  <img src="/images/services-01.jpg" alt="" className='detail-image' />
                  <h4>Project Introduction</h4>
                </div>
              </div>
              <div className="col-lg-3 happy">
                <div className="item">
                  <img src="/images/services-02.jpg" alt="" className='detail-image' />
                  <h4>Work Development</h4>
                </div>
              </div>
              <div className="col-lg-3 happy">
                <div className="item">
                  <img src="/images/services-03.jpg" alt="" className='detail-image' />
                  <h4>Data Analysis</h4>
                </div>
              </div>
              <div className="col-lg-3 happy">
                <div className="item last-item" style={{border: "none"}}>
                  <img src="/images/services-04.jpg" alt="" className='detail-image' />
                  <h4>Project Finishing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default HappySteps