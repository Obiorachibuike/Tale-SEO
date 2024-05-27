import "../css/video-info.css"

function VideoInfo() {
  return (
    <div>
      <div className="video-info section">
    <div className="container">
      <div className="row video">
        <div className="col-lg-6">
          <div className="video-thumb">
            <img src="/images/video-thumb.jpg" alt="" />
            <a href="http://youtube.com" target="_blank" rel="noreferrer"><i className="fa fa-play" /></a>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="section-heading">
            <h2>Detailed Information On What We Do &amp; Who We Are</h2>
            <div className="line-dec"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod tempor incididunt ut labore et dolore dolor.</p>
          </div>
          <div className="skills">
            <div className="skill-slide marketing">
              <div className="fill"></div>
              <h6>SEO Marketing</h6>
              <span>90%</span>
            </div>
            <div className="skill-slide digital">
              <div className="fill"></div>
              <h6>Digital Marketing</h6>
              <span>80%</span>
            </div>
            <div className="skill-slide media">
              <div className="fill"></div>
              <h6>Social Media Management</h6>
              <span>95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default VideoInfo
