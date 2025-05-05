import { FaNodeJs } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";

const skillList = [
  {
    title: "Programming",
    logo: <IoCodeSlashOutline />,
    contents: [
      {
        name: "Javascript",
        proficiency: 8.5,
      },
      {
        name: "Typescript",
        proficiency: 8,
      },
      {
        name: "Solidity",
        proficiency: 8,
      },

      {
        name: "Python",
        proficiency: 7,
      },
      {
        name: "C++",
        proficiency: 6,
      },
    ],
  },
  {
    title: "Libraries/Frameworks",
    logo: <FaNodeJs />,
    contents: [
      {
        name: "React.js",
        proficiency: 8.5,
      },
      {
        name: "Next.js",
        proficiency: 9,
      },

      {
        name: "Express.js",
        proficiency: 8,
      },
      {
        name: "Hardhat",
        proficiency: 8,
      },
      {
        name: "Mongoose",
        proficiency: 8,
      },
    ],
  },
  {
    title: "Databases",
    logo: <GoDatabase />,

    contents: [
      {
        name: "MongoDB",
        proficiency: 8,
      },
      {
        name: "MySQL",
        proficiency: 6,
      },
      {
        name: "Postgres",
        proficiency: 8,
      },
      {
        name: "MariaDB",
        proficiency: 6,
      },
    ],
  },
  {
    title: "Others",
    logo: <RiComputerLine />,
    contents: [
      {
        name: "Git",
        proficiency: 8,
      },
      {
        name: "Postman",
        proficiency: 8.5,
      },
      {
        name: "Github",
        proficiency: 8,
      },
      {
        name: "Docker",
        proficiency: 7,
      },
    ],
  },
];

export default skillList;
