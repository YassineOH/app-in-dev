import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setMainService } from "../app/features/service/serviceSlice";

interface Props {
  to: string;
  text: string;
  icon: string | JSX.Element;
}

const CustomButton: FC<Props> = ({ to, text, icon }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (to === "/sub-options") {
      dispatch(setMainService(text));
    }
  };

  return (
    <Link
      onClick={handleClick}
      to={to}
      className="mx-auto  text-slate-100 bg-slate-800 rounded-md focus:bg-red-500 hover:bg-red-500 shadow-lg"
    >
      <div className="flex items-center justify-center py-4 px-6 w-72 space-x-3">
        {typeof icon === "string" ? (
          <img src={icon} alt="icon" className="aspect-square w-4" />
        ) : (
          icon
        )}
        <span>{text}</span>
      </div>
    </Link>
  );
};
export default CustomButton;
