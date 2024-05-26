// import React from "react";
import ServiceImage from "./service-image";
import ServiceContent from "./service-content";
import "../css/service.css"

function Service() {
  return (
    <div>
      <section className="service">
        <div className="service-container">
          <div className="service-cont">
            <div className="service-content">
                <ServiceImage />
            </div>
                <ServiceContent />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
