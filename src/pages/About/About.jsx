/* eslint-disable react/no-unescaped-entities */
import { usePortfolioDetails } from "../../context/portfolioContext"
import Testimonial from "./Testimonial";
import Service from "./Service";

const About = () => {
  const { userDetails } = usePortfolioDetails();
  const { user } = userDetails;

  if (
    !user ||
    !user?.about ||
    !user?.about?.subTitle ||
    !user?.about?.description
  )
    return <div>Loading....</div>;

  const { about } = user;
  const { subTitle, description } = about;

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>{subTitle}</p>

        <p>{description}</p>
      </section>
      <Service services = {user?.services} />
      <Testimonial testimonials={user?.testimonials}/>


      {/* <!--
      - clients
    --> */}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
