// import React from 'react'

function ServiceContent() {
  return (
    <div>
      <div className="col-lg-6 offset-lg-6">
          <div className="row content" >
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>We Provide <span className="span1">Different Services </span> &
                  <span className="span2">  Features</span> For Your Agency</h2>
                  <div className="line-dec"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod.</p>
              </div>
            </div>
            <div className="flex">
            <div className="col-lg-6 col-sm-6 width">
              <div className="service-item">
                <div className="icon">
                  <img src="/images/services-01.jpg" alt="discover SEO" className="templatemo-feature" />
                </div>
                <h4>Discover More on Latest SEO Trends</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 width">
              <div className="service-item">
                <div className="icon">
                  <img src="/images/services-02.jpg" alt="data analysis" className="templatemo-feature" />
                </div>
                <h4>Real-Time Big Data Analysis</h4>
              </div>
            </div>
            </div>
            <div className="flex">
            <div className="col-lg-6 col-sm-6 width">
              <div className="service-item">
                <div className="icon">
                  <img src="/images/services-03.jpg" alt="precise data" className="templatemo-feature" />
                </div>
                <h4>Precise Data Analysis &amp; Prediction</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 width">
              <div className="service-item">
                <div className="icon">
                  <img src="/images/services-04.jpg" alt="SEO marketing" className="templatemo-feature" />
                </div>
                <h4>SEO Marketing &amp; Social Media</h4>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceContent
