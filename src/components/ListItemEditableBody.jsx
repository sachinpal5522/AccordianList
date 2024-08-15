import { useState } from "react";
import { FaTimes, FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";

const ListItemEditableBody = (props) => {
  const { id, dob, gender, country, description, dispatch, setIsEditable } =
    props;
  const [age, setAge] = useState(getAge(dob));
  const [sex, setSex] = useState(gender);
  const [nationality, setNationality] = useState(country);
  const [desc, setDesc] = useState(description);
  const [enableSave, setEnableSave] = useState(false);

  function getAge(date) {
    const today = new Date().valueOf();
    const dateOfBurth = new Date(date).valueOf();
    let miliseconsInYear = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((today - dateOfBurth) / miliseconsInYear);
  }

  function handleSave() {
    if (
      age &&
      sex &&
      nationality &&
      desc &&
      isNaN(Number(nationality)) &&
      !isNaN(Number(age))
    ) {
      let newYear = new Date().getFullYear() - age;
      let newDob = `${newYear}-${new Date(dob).getMonth()}-${new Date(
        dob
      ).getDate()}`;
      dispatch({
        type: "save",
        payload: {
          id: id,
          dob: newDob,
          gender: sex,
          country: nationality,
          description: desc,
        },
      });
      setIsEditable(false);
    } else {
      alert(
        "All fields are medatory. please fill all the values and age should be number and country sould be text only"
      );
    }
  }

  return (
    <div className="accordian-body">
      <div className="acc-body-head">
        <div className="inline-items">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={age}
            min={1}
            max={200}
            onChange={(e) => {
              setAge(e.target.value);
              setEnableSave(true);
            }}
          />
        </div>
        <div className="inline-items">
          <label>Gender</label>
          <select
            value={sex}
            name="gender"
            onChange={(e) => {
              setEnableSave(true);
              setSex(e.target.value);
            }}
          >
            <option value="rather not say">Rather not say</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="inline-items">
          <label>Country</label>
          <span>
            <input
              type="text"
              value={nationality}
              name="country"
              onChange={(e) => {
                setNationality(e.target.value);
                setEnableSave(true);
              }}
            />
          </span>
        </div>
      </div>
      <div className="description inline-items">
        <label>Description</label>
        <textarea
          name="description"
          rows={8}
          onChange={(e) => {
            setDesc(e.target.value);
            setEnableSave(true);
            setEnableSave(true);
          }}
          defaultValue={desc}
        ></textarea>
      </div>
      <div className="acc-body-footer">
        <FaRegTimesCircle
          className="cancel icon"
          onClick={() => {
            setIsEditable(false);
          }}
        />
        {enableSave ? (
          <FaRegCheckCircle className="save icon" onClick={handleSave} />
        ) : (
          <FaRegCheckCircle className="save icon gray" />
        )}
      </div>
    </div>
  );
};
export default ListItemEditableBody;
