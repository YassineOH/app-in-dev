import { FC } from "react";

const CustomRadio: FC<Props> = ({
  name,
  value,
  text,
  selected,
  handleChange,
}) => {
  return (
    <div
      className="flex items-center justify-start space-12 border w-72 h-14 px-4 rounded-sm space-x-8 cursor-pointer"
      onClick={() => handleChange(value)}
    >
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={() => handleChange(value)}
        checked={selected}
      />
      <label htmlFor={value} className="cursor-pointer text text-lg">
        {text || value}
      </label>
    </div>
  );
};
export default CustomRadio;

interface Props {
  text?: string;
  value: string;
  name: string;
  selected: boolean;
  handleChange(s: string): void;
}
