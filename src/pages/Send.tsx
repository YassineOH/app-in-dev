import { FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import { CustomInput, CustomSelect, Alert } from "../components";
import { resetUser } from "../app/features/user/userSlice";
import { resetService } from "../app/features/service/serviceSlice";
import cities from "../data/cities";
import sendData from "../app/sendData";

import type { RootState } from "../app/store";

const Send = () => {
  const { name, tel, address } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const { availability } = useSelector((state: RootState) => state.service);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendData();
    dispatch(resetUser());
    dispatch(resetService());
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <section>
      <div className="my-container flex flex-col items-center justify-center space-y-10">
        <h2 className="font-bold text-xl capitalize text-center">
          Confirmer votre information personnel
        </h2>
        {showAlert && (
          <Alert text="Nous avons reçu votre demande" color="green" />
        )}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <CustomInput
            type="text"
            value={name}
            name="name"
            label="Nom et Prénom :"
          />
          <CustomInput
            type="tel"
            value={tel || ""}
            name="tel"
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
            value={availability}
            name="availability"
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
