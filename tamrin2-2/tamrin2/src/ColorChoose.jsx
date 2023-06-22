import RedOption from "./Red";
import GreenOption from "./Green";
import BlueOption from "./Blue";
import YellowOption from "./Yellow";
const ColorChoose = ({ text, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option>{text}</option>
      <RedOption />
      <GreenOption />
      <BlueOption />
      <YellowOption />
    </select>
  );
};

export default ColorChoose;
