import "../css/faqs-banner.css"

function FaqsBanner() {
  return (
    <div>
        <div className="page-heading">
    <div className="container">
    <img src="/images/banner-left.png" alt="" className="small " />
      <div className="row faqs-banner">
        <div className="col-lg-7 align-self-center">
          <div className="caption  header-text">
            <h6>SEO DIGITAL AGENCY</h6>
            <div className="line-dec"></div>
            <h4>Most Frequently Asked <em>Questions</em> Here <em>?</em></h4>
          </div>
        </div>
        <div className="col-lg-5">
          <img src="/images/faqs-image.jpg" alt="" className="faqs-image"/>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default FaqsBanner