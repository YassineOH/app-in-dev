import { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { changeValue } from "../app/features/user/userSlice";

const CustomSelect: FC<Props> = ({ list, label, name }) => {
  const dispatch = useDispatch();

  const handleSelect = (e: FormEvent) => {
    const value = (e.target as HTMLInputElement).value;
    dispatch(changeValue({ name, value }));
  };

  return (
    <div className="flex flex-col w-72 mb-4">
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="border-2 px-4 py-1 outline-none rounded-sm border-slate-300"
        onChange={handleSelect}
      >
        <option value="none" defaultValue="true" disabled hidden>
          choisir une ville
        </option>
        {list.map((item, ind) => (
          <option value={item} key={ind}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CustomSelect;

interface Props {
  list: string[];
  name: string;
  label: string;
}
