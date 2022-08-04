import { FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import { CustomInput, CustomSelect, Alert, Loader } from "../components";
import { resetUser } from "../app/features/user/userSlice";
import { resetService } from "../app/features/service/serviceSlice";
import cities from "../data/cities";
import sendData from "../app/sendData";

import type { RootState } from "../app/store";
import type { Response } from "../app/sendData";

const Send = () => {
  const { name, phoneNumber, address } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response>({
    type: "success",
    msg: "",
  });

  const { date } = useSelector((state: RootState) => state.service);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { msg, type } = await sendData();
    setResponse({ type, msg });
    setShowAlert(true);
    dispatch(resetUser());
    dispatch(resetService());
    setIsLoading(false);
  };

  return (
    <section>
      {isLoading && <Loader />}
      <div className="my-container flex flex-col items-center justify-center space-y-10">
        <h2 className="font-bold text-xl capitalize text-center">
          Confirmer votre information personnel
        </h2>
        {showAlert && <Alert text={response.msg} type={response.type} />}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            value={name}
            name="name"
            label="Nom et Prénom :"
          />
          <CustomInput
            type="phoneNumber"
            value={phoneNumber || ""}
            name="phoneNumber"
            label="Numéro de téléphone :"
          />
          <CustomSelect list={cities} name="city" label="Ville :" />
          <CustomInput
            type="text"
            value={address}
            name="address"
            label="Adresse :"
          />
          <CustomInput
            type="date"
            value={date}
            name="date"
            label="Disponibilité :"
          />
          <input
            type="submit"
            value="Envoyer"
            className=" px-4 py-3 outline-none rounded-md text-slate-50 bg-slate-800 w-72 my-4 block mt-4 cursor-pointer"
          />
        </form>
        <Link to="/sub-options">
          <div className="flex items-center space-x-4 text-red-500 ">
            <FaChevronLeft />
            <span className="font-semibold">Retour</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Send;
