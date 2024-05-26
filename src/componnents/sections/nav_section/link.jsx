// import React from "react";

function Link() {
  return (
    <div>
      <div className="nav-link-container">
        <div className="nav-link-cont">
          <div className="nav-link-content">
            <ul className="nav-link">
              <li className="link">
                <a href="" className="link">
                  HOME
                </a>
              </li>
              <li className="link">
                <a href="" className="link">
                  SERVICES
                </a>
              </li>
              <li className="link">
                <a href="" className="link">
                  PROJECTS
                </a>
              </li>
              <li className="link dropdown-menu">
                <a href="" className="link page">
                  PAGES
                </a>
                <ul className="sub-nav-link">
                  <li className="sub-link-cont">
                    <a href="" className="sub-link">
                      ABOUT US
                    </a>
                  </li>
                  <li className="sub-link-cont">
                    <a href="" className="sub-link">
                      FAQS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="link">
                <a href="" className="link">
                  INFOS
                </a>
              </li>
              <li className="link">
                <a href="" className="link">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a className="menu-trigger">
        <span>Menu</span>
      </a>
    </div>
  );
}

export default Link;
