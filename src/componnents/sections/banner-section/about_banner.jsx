import "../css/about_section.css";

function Aboutbanner() {
  return (
    <div>
      <div className="page-heading">
        <div className="container">
            <img src="../images/banner-left.png" alt="" className="small " />
          <div className="row about-banner">
            <div className="col-lg-7 align-self-center">
              <div className="caption  header-text">
                <h6>SEO DIGITAL AGENCY</h6>
                <div className="line-dec"></div>
                <h4>
                  Discover More <em>About Us</em>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doers eiusmod tempor incididunt ut labore et dolore.
                </p>
                <div className="main-button">
                  <a href="#">Discover More</a>
                </div>
                {/* <span>or</span> */}
                <div className="second-button">
                  <a href="#">Check our FAQs</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <img src="../images/about-us-image.jpg" alt="" className="about-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutbanner;
