import { useState } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  const saveTaskHandler = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, user }),
    };

    const result = await fetch(
      "https://taskhit-api.herokuapp.com/task/create",
      requestOptions
    );
    await result.json();
    setIsOpen(false);
  };

  return (
    <>
      <div className={styles.darkBG}>
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.heading}>Add Task</h3>
            </div>
            <div className={styles.modalContent}>
              <input
                placeholder='Title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                placeholder='Description'
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                placeholder='User'
                type='text'
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} onClick={saveTaskHandler}>
                  Save
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
