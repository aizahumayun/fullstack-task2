import type { Developer } from "../types";
import DeveloperCard from "./DeveloperCard";
import type { Flag } from "../types";
import FlagComponent from "./FlagComponent";
import type { User } from "../types";
import ProfileCard from "../ProfileCard";
import type { UserCard } from "../types";
import RateCard from "./RateCard";

const Parent = () => {
  const developers: Developer[] = [
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],
      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
    {
      title: "Front-end Developer",
      subtitle: "Tech Job-Seeker",
      image: "https://placehold.co/110",
      links: ["https://linkedin.com/", "https://github.com/", "Abc@gmail.com"],

      // links: {
      //   linkedin: "https://linkedin.com/",
      //   github: "https://github.com/",
      //   gmail: "Abc@gmail.com",
      // },
    },
  ];
  const flags: Flag[] = [
    {
      color1: "bg-blue-500",
      color2: "bg-white",
      color3: "bg-red-500",
      countryName: "France",
      directionHorizontal: true,
    },
    {
      color1: "bg-black",
      color2: "bg-red-500",
      color3: "bg-yellow-500",
      countryName: "Germany",
      directionHorizontal: false,
    },
    {
      color1: "bg-green-500",
      color2: "bg-white",
      color3: "bg-red-500",
      countryName: "Italy",
      directionHorizontal: true,
    },
    {
      color1: "bg-white",
      color2: "bg-blue-500",
      color3: "bg-red-500",
      countryName: "Russia",
      directionHorizontal: false,
    },
    {
      color1: "bg-blue-500",
      color2: "bg-yellow-500",
      color3: "bg-red-500",
      countryName: "Romania",
      directionHorizontal: true,
    },
  ];

  const user1: User = {
    name: "Talan Dias",
    pic: "https://placehold.co/100",
    title: "UX Designer",
    verified: true,
  };
  const user2: User = {
    name: "Donald Duck",
    pic: "https://placehold.co/100",
    title: "UI Designer",
    verified: false,
  };

  const ratingCards: UserCard[] = [
    {
      id: 1,
      name: "Dean Houston",
      designation: "Full Stack Developer",
      rate: 35,
      picture: "https://placehold.co/75",
    },
    {
      id: 2,
      name: "Austin Shaw",
      designation: "UI/UX Designer",
      rate: 45,
      picture: "https://placehold.co/75",
    },
    {
      id: 3,
      name: "Talan Dias",
      designation: "CSS Specialist",
      rate: 20,
      picture: "https://placehold.co/75",
    },
    {
      id: 4,
      name: "Thomas Farmer",
      designation: "UX Designer",
      rate: 55,
      picture: "https://placehold.co/75",
    },
  ];
  return (
    <div>
      <div className="flex gap-9 flex-wrap ">
        <DeveloperCard developer={developers[0]} />
        <DeveloperCard developer={developers[1]} />
        <DeveloperCard developer={developers[2]} />
        <DeveloperCard developer={developers[3]} />
        <DeveloperCard developer={developers[4]} />
        <DeveloperCard developer={developers[5]} />
        <DeveloperCard developer={developers[6]} />
        <DeveloperCard developer={developers[7]} />
        <DeveloperCard developer={developers[8]} />
        <DeveloperCard developer={developers[9]} />
        <DeveloperCard developer={developers[10]} />
        <DeveloperCard developer={developers[11]} />

        <FlagComponent flag={flags[0]} />
        <FlagComponent flag={flags[1]} />
        <FlagComponent flag={flags[2]} />
        <FlagComponent flag={flags[3]} />
        <FlagComponent flag={flags[4]} />
      </div>
      <div className="flex gap-9 flex-wrap mt-10">
        <ProfileCard userProfile={user1} />
        <ProfileCard userProfile={user2} />
      </div>

      <div className="flex gap-9 flex-wrap mt-9  bg-gradient-to-tr  from-orange-300 to-rose-400 to-95% items-center justify-center">
        <RateCard ratingCard={ratingCards[0]} />
        <RateCard ratingCard={ratingCards[1]} />
        <RateCard ratingCard={ratingCards[2]} />
        <RateCard ratingCard={ratingCards[3]} />
      </div>
    </div>
  );
};

export default Parent;
