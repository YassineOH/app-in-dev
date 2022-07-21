import { FC } from "react";

interface Props {
  text: string;
  color: string;
}

const Alert: FC<Props> = ({ text, color }) => {
  const style = `w-72 py-3 px-4 my-3 text-center bg-${color}-300 text-${color}-900 text-md font-bold rounded-md`;

  return <div className={style}>{text}</div>;
};
export default Alert;
