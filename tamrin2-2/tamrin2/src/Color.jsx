const ColorOption = ({ colorName, color, onChange }) => {
  return (
    <option value={color} onChange={onChange}>
      {colorName}
    </option>
  );
};
export default ColorOption;
