import React from "react";

const Testimonial = ({ testimonials }) => {
  if (!testimonials) return <div>Loading...</div>;
  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map(({ name, review, image}) => (
          <li className="testimonials-item" key={name}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src={image.url}
                  alt={name}
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>
                {name}
              </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>{review}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonial;
