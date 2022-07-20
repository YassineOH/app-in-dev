import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { CustomButton } from "../components";

import img from "../assets/react.svg";

const data = [
  {
    text: " option 1",
    icon: img,
  },
  {
    text: " option 2",
    icon: img,
  },
  {
    text: " option 3",
    icon: img,
  },
];

const MainOptions = () => {
  return (
    <section>
      <div className="my-container flex flex-col items-center space-y-10 ">
        <h2 className="font-bold text-xl capitalize">Choisir votre option</h2>
        <div className="flex flex-col h-96 items-center justify-around">
          {data.map((item) => (
            <CustomButton
              key={item.text}
              to="/sub-options"
              icon={img}
              text={item.text}
            />
          ))}
        </div>

        <Link to="/">
          <div className="flex items-center space-x-4 text-red-500 ">
            <FaChevronLeft />
            <span className=" font-semibold">Retour</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default MainOptions;
