import { projects } from "../constants/projects.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/card.css";

const ProjectList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Slide duration in milliseconds (3 seconds)
    arrows: false,
  };

  return (
    <div className=" w-full bg-black h-full md:pl-20 px-4 pb-16 pt-5" id="Projects">
      <h1 className=" text-center text-4xl font-bold mb-10 text-white">
        Projects
      </h1>
      <Slider
        {...settings}
        className=" w-[60%] mx-auto bg-white rounded-md"
      >
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <img
              src={project.img}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h2 className=" text-3xl font-bold">{project.title}</h2>
              <p className=" text-gray-500">{project.details}</p>
              <p>{project.para}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link bg-red-800 hover:bg-red-600"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectList;
