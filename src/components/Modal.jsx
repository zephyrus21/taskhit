import styles from "../styles/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.heading}>Add Task</h3>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              <input type='text' />
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => setIsOpen(false)}>
                  Delete
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
