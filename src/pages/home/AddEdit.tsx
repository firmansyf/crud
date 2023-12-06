import { FC } from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { add, edit } from "../../api";
import { ToastMessage } from "../../component/toast-message";

interface Props {
  showModal: any;
  setShowModal: any;
  detail: any;
  setReload: any;
  reload: any;
  setDetail: any;
}
const AddEdit: FC<Props> = ({
  showModal,
  setShowModal,
  detail,
  setReload,
  reload,
  setDetail,
}) => {
  const onSubmit = (val) => {
    if (detail?.id) {
      edit({ nama: val?.nama }, detail?.id)
        .then(({ data }) => {
          setShowModal(false);
          setReload(reload + 1);
          ToastMessage({ type: "success", message: data?.message });
        })
        .catch(() => "");
    } else {
      add({ nama: val?.nama })
        .then(({ data }) => {
          setShowModal(false);
          setReload(reload + 1);
          ToastMessage({ type: "success", message: data?.message });
        })
        .catch(() => "");
    }
  };

  const onClose = () => {
    setShowModal(false);
    setDetail();
  };
  return (
    <>
      <Modal show={showModal} onHide={onClose}>
        <Formik
          initialValues={{ nama: detail?.nama || "" }}
          onSubmit={onSubmit}
        >
          <Form className="p-2">
            <div className="d-flex flex-column p-3">
              <label>Name :</label>
              <Field
                name="nama"
                placeholder="Enter Name"
                className="form-control form-control-sm mt-2"
              />
            </div>

            <div className="d-flex justify-content-end me-3">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-sm btn-secondary mx-2"
              >
                Close
              </button>
              <button type="submit" className="btn btn-sm btn-primary">
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export { AddEdit };
