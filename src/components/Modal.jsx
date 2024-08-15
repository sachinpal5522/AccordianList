import { FaTimes } from "react-icons/fa";

const Modal = (props) => {
  const { id, dispatch, setShowModal } = props;

  return (
    <div className="confirm-modal">
      <div className="modal-content">
        <FaTimes
          className="close-modal"
          onClick={() => {
            setShowModal(false);
          }}
        />
        <div className="modal-title">Are you sure you want to delete?</div>
        <div className="actions">
          <button
            className="cancel"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </button>
          <button
            className="delete"
            onClick={() => {
              dispatch({ type: "delete", payload: { id } });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
