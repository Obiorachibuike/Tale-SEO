// import React from 'react'
// import { useState } from "react";
import Icon from "./icon";
import Link from "./link";

function Nav() {
  // const [scroll, setScroll] = useState();
  // window.scroll(function () {
  //   var scroll = window.scrollTop();
  //   // var box = $('.header-text').height();
  //   // var header = $('header').height();

  //   if (scroll >= 90) {
  //     setScroll("background-header");
  //   } else {
  //     setScroll("background-header");
  //   }
  // });
  return (
    <div>
      <div className="nav-section">
        <div className='nav-section-cont' >
          <Icon />
          <Link />
        </div>
      </div>
    </div>
  );
}

export default Nav;
