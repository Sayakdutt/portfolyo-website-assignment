import { usePortfolioDetails } from "../context/portfolioContext";
import { ChevronDown, Mail, Smartphone, MapPin,CalendarRange } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { userDetails } = usePortfolioDetails();
  const { user } = userDetails;

  if (
    !user ||
    !user?.about ||
    !user?.email ||
    !user?.about?.name ||
    !user?.about?.title ||
    !user?.about?.phoneNumber
  )
    return <div>Loading....</div>; // If there is no data in the user object
  const { about, email, social_handles } = user;
  const { name, title, phoneNumber, avatar } = about;
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={about.avatar.url}
            alt={name}
            width={80}
            loading="lazy"
          />
        </figure>

        <div className="info-content">
          <h1 className="name">{name}</h1>

          <p className="title">{title}</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <Link href={`mailto:${email}`} className="contact-link">
                {email}
              </Link>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Smartphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <Link href={`tel:${phoneNumber}`} className="contact-link">
                {phoneNumber}
              </Link>
            </div>
          </li>

        <li className="contact-item">
              <div className="icon-box">
                <CalendarRange/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1982-06-23">June 23, 1982</time>
              </div>
            </li>


          <li className="contact-item">
            <div className="icon-box">
              <MapPin />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{about.address}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {social_handles.map((item) => (
            <li className="social-item" key={item?.platform}>
              <Link href={item.url} className="social-link">
                <img src={item.image.url} alt={item.platform} height={20} width={20}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
