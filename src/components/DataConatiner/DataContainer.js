import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};

const DataContainer = (props) => {
  const { id, name, userName, email } = props;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [nameEdit, setNameEdit] = useState(name);
  const [userNameEdit, setUserNameEdit] = useState(userName);
  const [emailEdit, setEmailEdit] = useState(email);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const formData = {
    name: nameEdit,
    userName: userNameEdit,
    email: emailEdit,
  };

  return (
    <>
      <tr className="blogs_table_row">
        <td>{id}</td>
        <td>{name}</td>
        <td>{userName}</td>
        <td>{email}</td>
        <td onClick={openModal}>
          <ion-icon name="create-outline" class="edit"></ion-icon>
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="heading">
                <h4>Edit</h4>
                <span className="close" onClick={closeModal}>
                  X
                </span>
              </div>
            </div>
            <div className="col-lg-12 col-xs-12">
              <div className="input-wrapper">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={nameEdit}
                  onChange={(e) => setNameEdit(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-xs-12">
              <div className="input-wrapper">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="User Name"
                  value={userNameEdit}
                  onChange={(e) => setUserNameEdit(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-xs-12">
              <div className="input-wrapper">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email"
                  value={emailEdit}
                  onChange={(e) => setEmailEdit(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12 col-xs-12 text-center">
              <button
                className="submit"
                type="button"
                onClick={() => {
                  props?.editForm(formData, id);
                  closeModal();
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DataContainer;
