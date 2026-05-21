const Icon = ({ component, bgColor }) => {
  console.log(bgColor);
  return (
    <div className={`w-auto rounded-sm border-white/30 border shadow-2xl p-2 bg-[${bgColor}]`}>{component}</div>
  );
}

export default Icon;