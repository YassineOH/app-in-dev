import { FC } from "react";

interface Props {
  type: "danger" | "success";
  text: string;
}

const Alert: FC<Props> = ({ text, type }) => {
  const style =
    type === "danger"
      ? "w-72 py-3 px-4 my-3 text-center bg-red-300 text-red-900 text-md font-bold rounded-md"
      : "w-72 py-3 px-4 my-3 text-center bg-green-300 text-green-900 text-md font-bold rounded-md";

  return <div className={style}>{text}</div>;
};
export default Alert;
