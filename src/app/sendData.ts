import { store } from "./store";

const send = async () => {
  const data = store.getState();
  console.log(data);
};

export default send;
