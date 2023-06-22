
import ColorOption from "./Color";
const ColorChoose = ({ text, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option>{text}</option>
      <ColorOption colorName={'Red'} value={'red'}/>
      <ColorOption colorName={'Green'} value={'green'}/>
      <ColorOption colorName={'Blue'} value={'blue'}/>
      <ColorOption colorName={'Yellow'} value={'yellow'}/>
    </select>
  );
};

export default ColorChoose;
