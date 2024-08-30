import React, { useState } from "react";
import "./TaskOne.css";
import Select from "react-select"; //here we have used the dependency named react-select for using select tag

const options = [
  { value: "india", label: "India" },
  { value: "pakistan", label: "Pakistan" },
  { value: "indonesia", label: "Indonesia" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "zambia", label: "Zambia" },
  { value: "zimbabwe", label: "Zimbabwe" },
  { value: "poland", label: "Poland" },
  { value: "mali", label: "Mali" },
  { value: "thailand", label: "Thailand" },
  { value: "euthopia", label: "Euthopia" },
  { value: "fiji", label: "Fiji" },
  { value: "america", label: "America" },
  { value: "Afghinstan", label: "Afghanistan" },
  { value: "Iran", label: "Iran" },
  { value: "China", label: "China" },
];

function TaskOne() {
  const [selectedOption, setselectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setselectedOption(selectedOption);
    //  console.log(selectedOption);
  };

  return (
    <div className="taskone-container">
      <Select
        options={options}
        placeholder="type here..."
        value={selectedOption}
      >
        onChange={handleChange}
      </Select>
    </div>
  );
}

export default TaskOne;
