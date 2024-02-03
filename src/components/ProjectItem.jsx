const ProjectItem = ({ img, title, details, link }) => {
  return (
    <div
      className=" rounded-xl relative flex items-center justify-center  group hover:bg-gradient-to-r from-black to-red-800 w-full 
    h-auto"
    >
      <img
        src={img}
        alt={title}
        className="group-hover:opacity-5 rounded-xl object-cover h-[20em] sm:h-[30em]"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-3xl text-white tracking-wider text-center font-bold ">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{details}</p>
        <a href={link}>
          <p className=" rounded-lg bg-red-700 p-2 text-white text-lg hover:bg-red-800">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};
export default ProjectItem;
