interface ItitleProps {
  text: string;
}

const MainTitle = ({ text }: ItitleProps) => {
  return (
    <div className="mb-4 lg:mb-5">
      <h2 className="text-[#262254] text-xl md:text-2xl lg:text-3xl font-semibold">
        {text}
      </h2>
    </div>
  );
};

export default MainTitle;
