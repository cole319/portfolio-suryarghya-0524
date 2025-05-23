interface HeaderProps {
  heading: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Header({ icon, heading, desc }: HeaderProps) {
  return (
    <article className="flex flex-col justify-center items-center pt-[5rem] pb-[2.5rem] 2xlc:pt-[7rem] 2xlc:pb-[4rem]">
      <span className="text-slate-600">{icon}</span>
      <h2 className="text-[1.2rem] 3xlc:text-[1.5rem] text-teal-800">{desc}</h2>
      <h1 className="text-[3rem] 3xlc:text-[4rem] text-slate-600 font-semibold">
        {heading}
      </h1>
    </article>
  );
}
