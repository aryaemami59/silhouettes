import { Row } from "reactstrap";

const FilterSelection = ({
  subject,
  images,
  label,
  humans,
  setHumans,
  selection,
}) => {
  const uniqueValues = ["All", ...new Set(images.map(item => item[subject]))];
  const options = [];

  uniqueValues.map(val => {
    return options.push(
      <option key={`${val}-${subject}`} value={val}>
        {val}
      </option>
    );
  });

  const handleChange = e => {
    const newObj = {
      [selection]:
        e.target.value !== "All"
          ? images.find(f => f[subject] === e.target.value).id
          : 0,
      [subject]: e.target.value,
    };
    setHumans(prev => ({ ...prev, ...newObj }));
  };

  return (
    <Row className="my-3 m-0">
      <label className="px-1" htmlFor={subject}>
        {label}:
      </label>
      <select
        onChange={handleChange}
        name={subject}
        id={subject}
        className="form-select"
        value={humans[subject] || "All"}
        aria-label={subject}>
        {options}
      </select>
    </Row>
  );
};

export default FilterSelection;
