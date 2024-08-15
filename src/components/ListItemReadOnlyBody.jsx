import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

const ListItemReadOnlyBody = (props) => {
  const { id, dob, gender, country, description, dispatch, setIsEditable } =
    props;
  const [showModal, setShowModal] = useState(false);

  function getAge(date) {
    const today = new Date().valueOf();
    const dateOfBurth = new Date(date).valueOf();
    let miliseconsInYear = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((today - dateOfBurth) / miliseconsInYear);
  }

  return (
    <>
      {showModal ? <Modal {...{ id, dispatch, setShowModal }} /> : null}
      <div className="accordian-body">
        <div className="acc-body-head">
          <div className="inline-items">
            <label>Age</label>
            <span>{getAge(dob)} Years</span>
          </div>
          <div className="inline-items">
            <label>Gender</label>
            <span>{gender}</span>
          </div>
          <div className="inline-items">
            <label>Country</label>
            <span>{country}</span>
          </div>
        </div>
        <div className="description inline-items">
          <label>Description</label>
          <p>{description}</p>
        </div>
        <div className="acc-body-footer">
          <FaRegTrashAlt
            className="delete icon"
            onClick={() => {
              setShowModal(true);
            }}
          />
          {getAge(dob) >= 18 ? (
            <FaPencilAlt
              className="edit icon"
              onClick={() => {
                setIsEditable(true);
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ListItemReadOnlyBody;
