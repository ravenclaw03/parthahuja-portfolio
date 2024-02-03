import ProjectItem from "./ProjectItem";
import sustain from "../assets/sustain2.png";
import yelp from "../assets/yelp.png";
import lemon from "../assets/lemon.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Project = () => {
  return (
    <div id="Projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-12">
      <h1 className=" text-center text-4xl font-bold mb-10">Projects</h1>

      {/* <div className="grid sm:grid-cols-2 gap-12 place-items-center">
        <ProjectItem img={yelp} title="YelpCamp" />
        <ProjectItem img={lemon} title="Lemon&Citrus" />
        <div className=" col-span-2">
          <ProjectItem img={sustain} title="SustainDine" />
        </div>
      </div> */}
      <div className="rounded-xl">
        <Carousel>
          <ProjectItem
            img={sustain}
            title="SustainDine"
            details={"MongoDb, Express, React Native, NodeJs"}
            link={"https://github.com/ravenclaw03/SustainDine"}
          />
          <ProjectItem
            img={yelp}
            title="YelpCamp"
            details={"MongoDb, Express, NodeJs, HTML, CSS"}
            link={"https://yelpcamp-h2lk.onrender.com/"}
          />
          <ProjectItem
            img={lemon}
            title="Lemon&Citrus"
            details={"HTML, CSS"}
            link={"https://ravenclaw03.github.io/Lemon-and-Citrus/"}
          />
        </Carousel>
      </div>
    </div>
  );
};
export default Project;
