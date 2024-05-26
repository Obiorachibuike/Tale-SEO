import { useState } from "react";
import "../css/client.css";

function Client() {
  const templete = [
    {
      item: "active",
      image: " ../images/happyclient-01.jpg",
      title: "Best CSS Templates for you ",
      text: ` Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed doers eiusmod kent tempor
      incididunt ut labore et dolore dolor.`,
      btn1: " Website Design",
      btn2: "User interface ",
      btn3: "User Experience ",
      btn4: "Digital Agency ",
    },
    {
      item: "active",
      image: " ../images/happyclient-01.jpg",
      title: " Detailed Information On What We Do",
      text: ` Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed doers eiusmod kent tempor
      incididunt ut labore et dolore dolor.`,
      btn1: "HTML CSS",
      btn2: "Bootstrap 5 ",
      btn3: " TemplateMo",
      btn4: " Development",
    },
    {
      item: "active",
      image: " ../images/happyclient-01.jpg",
      title: "Responsive HTML CSS Templates ",
      text: ` Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed doers eiusmod kent tempor
      incididunt ut labore et dolore dolor.`,
      btn1: "SEO Trend ",
      btn2: " Digital Agency",
      btn3: " Best Template",
      btn4: "Development ",
    },
    {
      item: "active",
      image: " ../images/happyclient-01.jpg",
      title: "   Detailed Information about SEO Techniques",
      text: ` Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed doers eiusmod kent tempor
      incididunt ut labore et dolore dolor.`,
      btn1: " Data Analysis",
      btn2: "SEO Trend ",
      btn3: " Templetes",
      btn4: "Research ",
    },
  ];
  const [display, setDisplay] = useState([]);
  const [active, setActive] = useState(null);
  const [index, setIndex] = useState();

  const showCase = (num = 0) => {
    setDisplay([templete[num]]);
    setActive(num === active ? null : num)
    setIndex(num)
    console.log(active === index);
};
  window.onload = function () {
    showCase();
  };

  return (
    <div>
      <div className="happy-clients section">
        <div className="container">
        <img src="../images/contact-left.jpg" alt="" className="left" />
          <img src="../images/contact-left.jpg" alt="" className="right" />
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  Our 4 Steps <em>To Success</em> &amp;{" "}
                  <span>Happy Clients</span>
                </h2>
                <div className="line-dec"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doers.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="tabs">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu">
                        <div
                          className={active === index ? "active": " " }
                          onClick={() => {
                            showCase(0);
                          }}
                        >
                          <span>Project Introduction</span>
                        </div>
                        <div
                          onClick={() => {
                            showCase(1);
                        }}
                        className = {active === index ? "active": " " }
                        >
                          <span>Work Development</span>
                        </div>
                        <div
                          onClick={() => {
                            showCase(2);
                          }}
                          className={active === index ? "active": " " }
                          >
                          <span>Data Analysis</span>
                        </div>
                        <div
                          
                          onClick={() => {
                              showCase(3);
                            }}
                            className={active === index ? "active": " " }
                        >
                          <span>Project Finishing</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <ul className="nacc">
                        {display.map(
                          (
                            {
                              text,
                              image,
                              title,
                              btn1,
                              btn2,
                              btn3,
                              btn4,
                              item,
                            }
                          ) => (
                            // eslint-disable-next-line no-constant-condition
                            <li className={active === index ? "active": " " } key={index}>
                              {console.log(index)}
                              <div>
                                <div className="row show">
                                  <div className="col-lg-7">
                                    <h4>{title}</h4>
                                    <div className="line-dec"></div>
                                    <p>{text}</p>
                                    <div className="info">
                                      <span>{btn1}</span>
                                      <span>{btn2}</span>
                                      <span>{btn3}</span>
                                      <span className="last-span">{btn4}</span>
                                    </div>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed doers eiusmod tempor
                                      incididunt ut labore et dolore dolor dolor
                                      sit amet, consectetur adipicing elit, sed
                                      doers eiusmod.
                                    </p>
                                  </div>
                                  <div className="col-lg-5 align-self-center">
                                    <img src={image} alt="" />
                                  </div>
                                </div>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
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

export default Client;
