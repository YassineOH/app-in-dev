import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="bg-red-500">
      <div className="my-container flex flex-col h-30 items-center justify-center text-slate-100 text-lg space-y-0 uppercase">
        <img src={logo} alt="logo" className="w-14 aspect-square" />
        <h1>the app name</h1>
      </div>
    </header>
  );
};
export default Header;
