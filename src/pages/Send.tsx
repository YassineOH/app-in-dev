import { FormEvent } from "react";
import { useSelector } from "react-redux";
import { CustomInput, CustomSelect } from "../components";
import cities from "../data/cities";
import sendData from "../app/sendData";

import type { RootState } from "../app/store";

const Send = () => {
  const { name, tel, address } = useSelector((state: RootState) => state.user);

  const { availability } = useSelector((state: RootState) => state.service);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendData();
  };

  return (
    <section>
      <div className="my-container flex flex-col items-center justify-center space-y-10">
        <h2 className="font-bold text-xl capitalize text-center">
          Confirmer votre information personnel
        </h2>
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
            className=" px-4 py-1 outline-none rounded-md text-slate-50 bg-red-500 w-72 my-4 block mt-4 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};
export default Send;
