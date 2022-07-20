import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setSubService } from "../app/features/service/serviceSlice";
import { CustomRadio } from "../components";

import img from "../assets/react.svg";
import { RootState } from "../app/store";

const data = [
  {
    icon: img,
    text: "option 1",
    value: "option 1",
    name: " string;",
  },
  {
    icon: img,
    text: "option 1",
    value: "option 2",
    name: " string;",
  },
  {
    icon: img,
    text: "option 1",
    value: "option 3",
    name: " string;",
  },
  {
    icon: img,
    text: "option 1",
    value: "option 4",
    name: " string;",
  },
  {
    icon: img,
    text: "option 1",
    value: "option 5",
    name: " string;",
  },
];
const SubOptions = () => {
  const value = useSelector((state: RootState) => state.service.subService);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/send");
  };
  const handleChange = (value: string) => dispatch(setSubService(value));

  return (
    <section>
      <div className="my-container flex flex-col items-center space-y-12">
        <h2 className="font-bold text-xl capitalize">Spécifier votre option</h2>
        <div className="flex flex-col items-center justify-around  ">
          <form className="space-y-6 text-center">
            {data.map((item) => (
              <CustomRadio
                key={item.value + Math.random}
                handleChange={handleChange}
                name={item.name}
                value={item.value}
                selected={item.value === value}
              />
            ))}
            <button
              className={value ? "btn-link" : "btn-disabled"}
              onClick={handleSubmit}
            >
              Confirmer
            </button>
          </form>
        </div>

        <Link to="/main-options">
          <div className="flex items-center space-x-4 text-red-500 ">
            <FaChevronLeft />
            <span className="font-semibold">Retour</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default SubOptions;
