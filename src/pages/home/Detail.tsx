import { FC } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  showModal: any;
  setShowModal: any;
  detail: any;
}
const ModalDetail: FC<Props> = ({ showModal, setShowModal, detail }) => {
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <div className="d-flex flex-column p-3">
          <div className="d-flex flex-column mb-2">
            <label>Name :</label>
            <span
              className="form-control form-control-sm"
              style={{ backgroundColor: "#EEE" }}
            >
              {detail?.nama || "-"}
            </span>
          </div>
          <div className="d-flex flex-column">
            <label>Description :</label>
            <span
              className="form-control form-control-sm"
              style={{ backgroundColor: "#EEE" }}
            >
              {detail?.deskripsi || "-"}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-end me-3 p-3">
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-sm btn-secondary mx-2"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export { ModalDetail };
