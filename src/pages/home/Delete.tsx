import { FC } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  showModal: any;
  setShowModal: any;
  onClick: () => void;
  setDetail: any;
}
const ModalDelete: FC<Props> = ({
  showModal,
  setShowModal,
  onClick,
  setDetail,
}) => {
  const onClose = () => {
    setShowModal(false);
    setDetail();
  };

  return (
    <>
      <Modal show={showModal} onHide={onClose}>
        <div className="d-flex flex-column p-3">
          Are you sure want to delete
        </div>

        <div className="d-flex justify-content-end me-3 p-3">
          <button onClick={onClose} className="btn btn-sm btn-secondary mx-2">
            Close
          </button>
          <button
            type="submit"
            className="btn btn-sm btn-primary"
            onClick={onClick}
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
};

export { ModalDelete };
