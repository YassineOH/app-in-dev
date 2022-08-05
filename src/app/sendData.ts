import { store } from "./store";
import axios from "axios";

export interface Response {
  type: "success" | "danger";
  msg: string;
}

const send = async (): Promise<Response> => {
  const data = store.getState();
  const { user, service } = data;
  console.log(user, service);
  try {
    await axios.post(import.meta.env.VITE_URL_API, {
      user,
      service,
    });

    return {
      type: "success",
      msg: "Nous avons reçu votre demande",
    };
  } catch (error) {
    return {
      type: "danger",
      msg: "quelque chose s'est mal passé, veuillez réessayer plus tard",
    };
  }
};

export default send;
