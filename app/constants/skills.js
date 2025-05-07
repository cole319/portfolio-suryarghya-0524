import { FaNodeJs, FaHardHat } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiJavascript,
  SiTypescript,
  SiSolidity,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongoose,
  SiMongodb,
  SiMysql,
  SiMariadb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
} from "react-icons/si";

const skillList = [
  {
    title: "Programming",
    logo: <IoCodeSlashOutline />,
    contents: [
      {
        icon: (
          <SiJavascript
          // style={{ color: "yellow" }}
          />
        ),
        name: "Javascript",
        proficiency: 8.5,
      },
      {
        icon: (
          <SiTypescript
          //   style={{ color: "#3178C6" }}
          />
        ),
        name: "Typescript",
        proficiency: 8,
      },
      {
        icon: (
          <SiSolidity
          //   style={{ color: "#ffffff" }}
          />
        ),
        name: "Solidity",
        proficiency: 8,
      },

      {
        icon: (
          <SiPython
          //   style={{ color: "#3776AB" }}
          />
        ),
        name: "Python",
        proficiency: 7,
      },
      {
        icon: (
          <SiCplusplus
          //   style={{ color: "#00599C" }}
          />
        ),
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
        icon: (
          <SiReact
          // style={{ color: "#61DAFB" }}
          />
        ),
        name: "React.js",
        proficiency: 8.5,
      },
      {
        icon: (
          <SiNextdotjs
          //   style={{ color: "#ffffff" }}
          />
        ),
        name: "Next.js",
        proficiency: 9,
      },

      {
        icon: (
          <SiExpress
          //   style={{ color: "#ffffff" }}
          />
        ),
        name: "Express.js",
        proficiency: 8,
      },
      {
        icon: (
          <FaHardHat
          //   style={{ color: "yellow" }}
          />
        ),
        name: "Hardhat",
        proficiency: 8,
      },
      {
        icon: (
          <SiMongoose
          //   style={{ color: "#880000" }}
          />
        ),
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
        icon: (
          <SiMongodb
          // style={{ color: "#47A248" }}
          />
        ),
        name: "MongoDB",
        proficiency: 8,
      },
      {
        icon: (
          <SiMysql
          //   style={{ color: "#ffffff" }}
          />
        ),
        name: "MySQL",
        proficiency: 6,
      },
      {
        icon: (
          <BiLogoPostgresql
          //   style={{ color: "#4169E1" }}
          />
        ),
        name: "Postgres",
        proficiency: 8,
      },
      {
        icon: (
          <SiMariadb
          //   style={{ color: "#ffffff" }}
          />
        ),
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
        icon: (
          <SiGit
          // style={{ color: "#F05032" }}
          />
        ),
        name: "Git",
        proficiency: 8,
      },
      {
        icon: (
          <SiPostman
          //   style={{ color: "#FF6C37" }}
          />
        ),
        name: "Postman",
        proficiency: 8.5,
      },
      {
        icon: (
          <SiGithub
          //   style={{ color: "#ffffff" }}
          />
        ),
        name: "Github",
        proficiency: 8,
      },
      {
        icon: (
          <SiDocker
          //   style={{ color: "#2496ED" }}
          />
        ),
        name: "Docker",
        proficiency: 7,
      },
    ],
  },
];

export default skillList;
