import {
  FaRegTrashAlt,
  FaPencilAlt,
  FaTimes,
  FaAngleDown,
  FaAngleUp,
  FaRegTimesCircle,
  FaRegCheckCircle,
} from "react-icons/fa";

import ListItemEditableBody from "./ListItemEditableBody";
import ListItemReadOnlyBody from "./ListItemReadOnlyBody";
import { useState } from "react";

const ListItem = (props) => {
  const { id, first, last, picture, open, dispatch } = props;
  const [isEditable, setIsEditable] = useState(false);

  function handleAccordianClick() {
    dispatch({ type: "accordian-clicked", payload: { id } });
  }

  return (
    <ul>
      <li className="list-item">
        <button className="accordian-head" onClick={handleAccordianClick}>
          <h2>
            <img src={picture}></img>
            {`${first} ${last}`}
          </h2>
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </button>
        {open ? (
          isEditable ? (
            <ListItemEditableBody {...props} setIsEditable={setIsEditable} />
          ) : (
            <ListItemReadOnlyBody {...props} setIsEditable={setIsEditable} />
          )
        ) : null}
      </li>
    </ul>
  );
};

export default ListItem;
