import { FC, useState, useEffect } from "react";
import { AddEdit } from "./AddEdit";
import { getData, deleteData } from "../../api";
import { ModalDelete } from "./Delete";
import { ToastMessage } from "../../component/toast-message";
import { ModalDetail } from "./Detail";

const Home: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalDetail, setShowModalDetail] = useState<boolean>(false);
  const [showModalDel, setShowModalDel] = useState<boolean>(false);
  const [detail, setDetail] = useState<any>();
  const [data, setData] = useState<any>([]);
  const [reload, setReload] = useState<any>(0);

  useEffect(() => {
    getData()
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => "");
  }, [reload]);

  const onEdit = (e) => {
    setDetail(e);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setShowModalDel(true);
    deleteData(id)
      .then(({ data }) => {
        setShowModalDel(false);
        setDetail([]);
        setReload(reload + 1);
        ToastMessage({ type: "success", message: data?.message });
      })
      .catch(() => "");
  };

  return (
    <>
      <div className="card" style={{ width: "50vw" }}>
        <div className="card-header d-flex justify-content-between">
          <span>{data?.message}</span>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setShowModal(true)}
          >
            + Add New Data
          </button>
        </div>
        <div className="card-body pt-2 d-flex flex-column">
          <section className="d-flex justify-content-between">
            <div className="d-flex">
              <span className="text-start fw-bold" style={{ width: "4rem" }}>
                No
              </span>
              <span className="fw-bold">Name</span>
            </div>
          </section>

          {data?.data?.map((item, i) => (
            <div className="d-flex justify-content-between p-1" key={i}>
              <section className="d-flex mt-3">
                <span style={{ width: "4rem" }} className="text-start">
                  {i + 1}
                </span>
                <span>
                  {item?.nama}{" "}
                  <span
                    className="badge bg-success"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDetail(item);
                      setShowModalDetail(true);
                    }}
                  >
                    detail
                  </span>
                </span>
              </section>

              <div className="d-flex">
                <button
                  className="btn btn-sm bg-warning text-white"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm bg-danger ms-2 text-white"
                  onClick={() => {
                    setDetail(item);
                    setShowModalDel(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="card-footer"></div>
      </div>

      <AddEdit
        setShowModal={setShowModal}
        showModal={showModal}
        detail={detail}
        setReload={setReload}
        reload={reload}
        setDetail={setDetail}
      />

      <ModalDelete
        setDetail={setDetail}
        setShowModal={setShowModalDel}
        showModal={showModalDel}
        onClick={() => handleDelete(detail?.id)}
      />

      <ModalDetail
        setShowModal={setShowModalDetail}
        showModal={showModalDetail}
        detail={detail}
      />
    </>
  );
};

export { Home };
