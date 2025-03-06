interface Ichildren {
  children: string;
  style?: string;
}

const MainButton = ({ children ,style }: Ichildren) => {
  return <button className={`rounded-md py-2 px-3 text-nowrap lg:px-6 bg-[#543883] text-white main-transition text-sm font-medium hover:text-[#543883] hover:bg-transparent border border-transparent hover:border-[#543883] cursor-pointer ${style}`}>{children}</button>;
};

export default MainButton;
