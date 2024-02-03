import ExpItem from "./ExpItem";

const data = [
  {
    year: "2022–Present",
    title: "Social Media Lead at Google Developers Student Club JIIT 128",
    duration: "1.5 Years",
    details:
      "Manage social media handles, event marketing, and I led a session on Git/GitHub and organised a national-level hackathon with 700+ participants.",
  },
  {
    year: "2022-Present",
    title: "Marketing and PR Head at Abhivyakti: Drama Society JIIT 128",
    duration: "2 Years",
    details:
      "Execute marketing strategies for events and workshops and design posters and create interactive content.",
  },
  {
    year: 2023,
    title: "SpaceHack, IIIT Delhi",
    duration: "24hr Hackathon",
    details:
      "Attained a position within the top 10 teams(out of 100+ teams) in the competition.",
  },
];
const Experience = () => {
  return (
    <div id="Experience" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className=" text-center text-4xl font-bold mb-10">Experience</h1>

      {data.map((item, idx) => (
        <ExpItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default Experience;
