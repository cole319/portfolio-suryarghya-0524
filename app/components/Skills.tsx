import { FaLightbulb } from "react-icons/fa";

// internal imports
import skillList from "../constants/skills";
import { getProficiency } from "../utils/getProficiency";

export default function Skills() {
  return (
    <section
      id="skills"
      data-key="next_prev"
      // className="px-[12rem] py-[6rem] bg-gradient-to-r from-teal-800 via-teal-800/50 to-transparent text-slate-50 rounded-bl-[10%] flex justify-between item-center"
      className="px-[1rem] lgc:px-[4rem] 2lgc:px-[4rem] xlc:px-[8rem] 3lgc:px-[6rem] 2xlc:px-[12rem] py-[3rem] 2xlc:py-[10rem] bg-gradient-to-r from-teal-800/70 via-teal-800/20 to-transparent text-slate-50 2xlc:rounded-bl-[10%] flex flex-col gap-[2.5rem] 2xlc:gap-0 2xlc:flex-row justify-between item-center"
    >
      <div
        id="skills_container"
        className="grid 2lgc:grid-cols-2 2xlc:grid-rows-2 w-full gap-[2rem]"
      >
        {skillList.map((skill, idx) => {
          return (
            <div
              key={idx}
              className=" border-[1px] border-slate-200/20 rounded-md py-4 px-8 w-full"
            >
              <h1 className="font-bold text-center text-xl text-slate-50 pb-4">
                <div className="flex items-center gap-[1rem]">
                  <div className="border-[1px] rounded-full p-1 border-slate-50 text-bold">
                    {skill.logo}
                  </div>
                  <div>{skill.title}</div>
                </div>
              </h1>

              <div className="p-2 rounded-md">
                {skill.contents.map((content, id) => {
                  return (
                    <div key={id}>
                      <div className="py-2 flex flex-col justify-center items-start gap-[0.5rem]">
                        <h1 className="font-semibold md:w-2/6 text-slate-50 hover:text-slate-200">
                          {content.name}
                        </h1>

                        <div className="bg-transparent mb-1 border-[1px] border-slate-400 rounded-sm w-full lg:w-3/4 h-2">
                          <div
                            className={`bg-slate-50 h-full rounded-sm `}
                            style={{
                              width: getProficiency(content.proficiency),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
