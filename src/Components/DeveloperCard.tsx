import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import type { Developer } from "../types";

type DeveloperCard = {
  developer: Developer;
};
const DeveloperCard = ({ developer }: DeveloperCard) => {
  const { title, subtitle, image, links } = developer;
  const [linkedin, github, gmail] = links
  return (
    <div className="bg-white h-76 w-66 flex flex-col items-center justify-center rounded-lg shadow-lg pb-8 ">
      <div className="h-1/2 w-full bg-blue-500 -mt-3.5 flex items-end justify-center relative">
        <img
          src={image}
          alt=""
          className="rounded-full absolute top-[40%] border-2 border-blue-500"
        />
      </div>
      <div className="mt-14 ">
        <h1 className="font-bold  text-gray-500 ">{title}</h1>
        <h2 className="font-semibold text-gray-500">{subtitle}</h2>
      </div>
      <div className="flex items-center justify-start space-x-4 pt-2">
        {linkedin ? (
          <a href={linkedin} className="flex-1 text-center text-blue-500">
            <FaLinkedin />
          </a>
        ) : (
          <IoIosCloseCircle className="text-red-400 size-5" />
        )}
        {github ? (
          <a href={github} className="flex-1 text-center">
            <FaGithub />
          </a>
        ) : null}
        {gmail? (
          <a
            href={gmail}
            className="flex-1 text-center text-red-400 font-bold text-xl"
          >
            <CgMail />
          </a>
        ) : (
          <span className="text-gray-400">Not Available</span>
        )}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded-4xl">
        Message
      </button>
    </div>
  );
};

export default DeveloperCard;
