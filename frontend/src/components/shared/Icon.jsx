const Icon = ({ component, bgColor }) => {
  console.log(bgColor);
  return (
    <div className={`w-auto rounded-lg border-white/30 border shadow-2xl p-2 `}>
      {component}
    </div>
  );
};

export default Icon;