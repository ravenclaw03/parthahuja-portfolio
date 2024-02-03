// eslint-disable-next-line react/prop-types
const ExpItem = ({year,duration,details,title}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
        <p className="flex flex-row flex-wrap justify-start gap-4 items-start text-xs md:teext-sm">
          <span className=" inline-block px-2 py-1 font-semibold text-white bg-orange-700 rounded-md">{year}</span>
          <span className="text-lg text-orange-700 font-semibold">{title}</span>
          <span className=" my-1 text-sm font-normal text-stone-400 leading-3 mt-2">{duration}</span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">
            {details}
        </p>
      </li>
    </ol>
  );
}
export default ExpItem