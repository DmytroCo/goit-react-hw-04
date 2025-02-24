import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    border: "none",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "90%", 
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", 
    zIndex: 1000, 
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, closeModal, selectedImage }) {
  if (!selectedImage) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal} 
      contentLabel="Image Modal"
      style={customStyles}
      overlayClassName={css.overlay} 
    >
      <div className={css.modal}>
        <h2 className={css.title}>
          {selectedImage.alt_description || "Image"}
        </h2>
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
          className={css.modalImage}
        />
        <button onClick={closeModal} className={css.modalBtn}>
          Close
        </button>
      </div>
    </Modal>
  );
}