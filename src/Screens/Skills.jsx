import {
  DockerLogo,
  ExpressJSLogo,
  FastAPILogo,
  GithubLogo,
  JavaScriptLogo,
  MongoDBLogo,
  NodeJSLogo,
  PostgreSQLLogo,
  ReactJSLogo,
  NextJSLogo,
  TailwindCSSLogo,
} from "../Assets/AssetsList";
import GitHubCalender from "../Components/GitHubCalender";
import SkillsCard from "../Components/SkillsCard";
import Title from "../Components/Title";
import Vision from "../Components/Vision";

const Skills = () => {
  // const data = [
  //   JavaScriptLogo,
  //   ReactJSLogo,
  //   TailwindCSSLogo,
  //   NodeJSLogo,
  //   MongoDBLogo,
  //   ExpressJSLogo,
  //   GithubLogo,
  //   // FastAPILogo,
  //   // PostgreSQLLogo,
  //   DockerLogo,
  //   NextJSLogo,
  // ];
  const data = [
    { name: "JavaScript", logo: JavaScriptLogo },
    { name: "ReactJS", logo: ReactJSLogo },
    { name: "TailwindCSS", logo: TailwindCSSLogo },
    { name: "NodeJS", logo: NodeJSLogo },
    { name: "MongoDB", logo: MongoDBLogo },
    { name: "ExpressJS", logo: ExpressJSLogo },
    { name: "Github", logo: GithubLogo },
    // { name: "FastAPI", logo: FastAPILogo },
    // { name: "PostgreSQL", logo: PostgreSQLLogo },
    { name: "Docker", logo: DockerLogo },
    { name: "NextJS", logo: NextJSLogo },
  ];

  const TitleText = (
    <h1 className=" text-gray-800 font-bebas-neue text-4xl dark:text-white pb-6 ">
      Where <strong className="text-fadeMainTheme">Passion</strong> Meets{" "}
      <strong className="text-fadeMainTheme">Proficiency</strong>
    </h1>
  );
  return (
    <div className="my-20 flex justify-center items-center flex-col">
      <Title text={TitleText} id="skills" />
      <div
        id="skills"
        className="grid grid-cols-2 lg:grid-cols-5  gap-10 mt-10 px-10 lg:ml-10 lg:w-10/12 max-w-fit"
      >
        {data.map((item, index) => (
          // <SkillsCard imgSrc={item} index={index} key={index} />
          <SkillsCard
            name={item.name}
            imgSrc={item.logo}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className="flex justify-center items-center flex-col my-20">
        {/* <GitHubCalender /> */}
        {/* <Vision /> */}
      </div>
    </div>
  );
};

export default Skills;
