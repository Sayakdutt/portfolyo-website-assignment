import { usePortfolioDetails } from '../../context/portfolioContext';
import { Eye } from "lucide-react";
import { Link } from 'react-router-dom';

const Projects = () => {
  const {userDetails} =  usePortfolioDetails();
  const {user} = userDetails;
  if(!user || !user?.projects) return <div style={{color: "#fffff"}}>Loading...</div>
   return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section className="projects">
        <ul className="project-list">
        {user?.projects.map(
            ({ title, image, techStack, liveurl }) => (
              <li
                className="project-item  active"
                data-filter-item
                data-category="web design"
                key={title}
              >
                <Link href={liveurl}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <Eye />
                    </div>

                    <img src={image.url} alt={title} loading="lazy" />
                  </figure>

                  <h3 className="project-title">{title}</h3>

                  <p className="project-category" style={{display: "flex" , gap: "4px"}}>
                    {techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </section>
  );
};

export default Projects;
