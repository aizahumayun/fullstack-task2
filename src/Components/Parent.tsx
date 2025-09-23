import type { Developer } from "../types";
import DeveloperCard from "./DeveloperCard";

const Parent = () => {
    const developers: Developer[] = [
        {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
     {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: ""},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker" ,
      image: "https://placehold.co/110", 
      links: {linkedin: "https://linkedin.com/", github: "https://github.com/", gmail: "Abc@gmail.com"},
    },
    ]
  return (
    <div className="flex gap-9 flex-wrap ">
      <DeveloperCard developer={developers[0]}/>
      <DeveloperCard developer={developers[1]}/>
      <DeveloperCard developer={developers[2]}/>
      <DeveloperCard developer={developers[3]}/>
      <DeveloperCard developer={developers[4]}/>
      <DeveloperCard developer={developers[5]}/>
      <DeveloperCard developer={developers[6]}/>
      <DeveloperCard developer={developers[7]}/>
      <DeveloperCard developer={developers[8]}/>
      <DeveloperCard developer={developers[9]}/>
      <DeveloperCard developer={developers[10]}/>
      <DeveloperCard developer={developers[11]}/>
    </div>
  );
};

export default Parent;
