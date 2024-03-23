/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Services({ services }) {
    if(!services) return <div>Loading...</div>
    
  return (
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">
        {services.map(({ name, desc, image }) => (
          <li className="service-item" key={name}>
            <div className="service-icon-box">
              <img src={image.url} alt={name} width={60} height={60} loading="lazy"/>
            </div>
            
            <div className="service-content-box">
              <h4 className="h4 service-item-title">{name}</h4>

              <p className="service-item-text">
                {desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
