interface ButtonProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverBgColor: string;
  textColor?: string;
  hoverTextColor?: string;
}

export default function Button({
  title,
  icon,
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
}: ButtonProps) {
  return (
    <button
      id="button"
      className={`border-solid border-[1px] border-slate-50 p-[0.1rem] rounded-full cursor-pointer w-full lgc:w-fit`}
    >
      <div
        className={`flex justify-center items-center gap-[0.5rem] 2xlc:gap-[1rem] px-[2rem] py-[0.8rem] rounded-full ease-in-out duration-400 ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor}`}
      >
        <span>{icon}</span>
        <p className="font-semibold">{title}</p>
      </div>
    </button>
  );
}
