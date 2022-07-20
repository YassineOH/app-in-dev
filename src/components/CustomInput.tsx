import { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { changeValue } from "../app/features/user/userSlice";
import { setAvailability } from "../app/features/service/serviceSlice";

const CustomInput: FC<Props> = ({ name, label, type, value }) => {
  const dispatch = useDispatch();

  const handleChange = (e: FormEvent) => {
    const value = (e.target as HTMLInputElement).value;

    if (name === "availability") {
      dispatch(setAvailability(value));
    } else {
      dispatch(changeValue({ name, value }));
    }
  };

  return (
    <div className="flex flex-col w-72 mb-4">
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        name={name}
        className="border-2 px-4 py-1 outline-none rounded-sm border-slate-300"
        onChange={handleChange}
      />
    </div>
  );
};
export default CustomInput;

interface Props {
  name: string;
  type: string;
  label: string;
  value: string;
}
