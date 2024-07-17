import "../styles/card.css";

const Card = ({ project }) => {
  return (
    <div className="card-project">
      <img
        src={project.img}
        alt={project.title}
        className=" h-[7rem] rounded-lg relative w-[14rem] mx-auto"
      />
      <p className="heading">{project.title}</p>
      <p className=" text-sm text-center text-gray-500">{project.details}</p>
      <p className=" text-sm text-center">{project.para}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-project-link"
      >
        View Project
      </a>
    </div>
  );
};

export default Card;
