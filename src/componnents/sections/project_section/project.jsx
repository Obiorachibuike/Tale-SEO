import React, { useState } from "react";
import "../css/project.css";

function Project() {
  const project = [
    {
      title: "Best Responsive Website Layouts",
      image: "../images/projects-03.jpg",
      href: "#",
    },
    {
      title: "HTML CSS Layouts for your websites",
      image: "../images/projects-04.jpg",
      href: "#",
    },
    {
      title: "Bootstrap 5 Themes for Free",
      image: "../images/projects-02.jpg",
      href: "#",
    },
    {
      title: "Mobile Friendly Website Layouts",
      image: "../images/projects-03.jpg",
      href: "#",
    },
    {
      title: "Digital Agency HTML Templates",
      image: "../images/projects-01.jpg",
      href: "#",
    },
    {
      title: "Admin Dashboard CSS Templates",
      image: "../images/projects-02.jpg",
      href: "#",
    },
    {
      title: "Best Responsive Website Layouts",
      image: "../images/projects-03.jpg",
      href: "#",
    },
    {
      title: "HTML CSS Layouts for your websites",
      image: "../images/projects-04.jpg",
      href: "#",
    },
    {
      title: "Bootstrap 5 Themes for Free",
      image: "../images/projects-02.jpg",
      href: "#",
    },
    {
      title: "Mobile Friendly Website Layouts",
      image: "../images/projects-03.jpg",
      href: "#",
    },
    {
      title: "Digital Agency HTML Templates",
      image: "../images/projects-01.jpg",
      href: "#",
    },
    {
      title: "Admin Dashboard CSS Templates",
      image: "../images/projects-02.jpg",
      href: "#",
    },
    {
      title: "Best Responsive Website Layouts",
      image: "../images/projects-03.jpg",
      href: "#",
    },
    {
      title: "HTML CSS Layouts for your websites",
      image: "../images/projects-04.jpg",
      href: "#",
    },
  ];

  const visibleImagesCount = 4; // adjust to your desired number of visible images
  let num = 0;
  const [offset, setOffset] = useState(0);

  const visibleImages = project.slice(offset, offset + visibleImagesCount);

  const moveToNext = () => {
    if (offset + visibleImagesCount < project.length) setOffset(offset + 1);
    else setOffset(num);
  };

  const moveToPrevious = () => {
    if (offset > 0) setOffset(offset - 1);
  };

  // setInterval(() => {
  //   moveToNext();
  // }, 2000);

  return (
    <div>
      <div className="projects section" id="projects">
        <div className="height">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className=" pad"
                  
                >
                  <h2>
                    Discover Our <em>Work</em> &amp; <span>Projects</span>
                  </h2>
                  <div className="line-dec"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doers eiusmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="owl-features owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage project-container">
                      {visibleImages.map(({ title, image, href },index) => (
                        
                          <div className="owl-item project-cont cloned project-cont" key={index}>
                            <div className="item">
                              <img className="image" src={image} alt="image" />
                              <div className="down-content">
                                <h4>{title}</h4>
                                <a href={href}>
                                  <i className="fa fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                      
                      ))}
                
                    </div>
                  </div>
                  <div className="owl-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                      onClick={moveToPrevious}
                    >
                      <span aria-label="Previous">‹</span>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                      onClick={moveToNext}
                    >
                      <span aria-label="Next">›</span>
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
