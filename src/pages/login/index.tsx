import { Formik, Form, Field } from "formik";
import { FC } from "react";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";
import { ToastMessage } from "../../component/toast-message";

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (val: any) => {
    const params = {
      username: val.username,
      password: val.password,
    };
    login(params)
      .then(({ data }) => {
        window.localStorage.setItem("accessToken", data?.data?.token);
        ToastMessage({ type: "success", message: data?.message });
        navigate("/beranda");
      })
      .catch(() => "");
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <section
            className="card d-flex flex-column shadow-sm"
            style={{ width: "20rem" }}
          >
            <div className="card-header">
              <span>Login Form</span>
            </div>

            <div className="card-body ">
              <div className="d-flex flex-column justify-content-start align-items-start mb-3">
                <label>Username</label>
                <Field
                  type="text"
                  placeholder="Enter Username"
                  className="form-control form-control-sm"
                  name="username"
                />
              </div>

              <div className="d-flex flex-column justify-content-start align-items-start">
                <label>Password</label>
                <Field
                  type="password"
                  placeholder="Enter Password"
                  className="form-control form-control-sm"
                  name="password"
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-sm btn-primary">
                login
              </button>
            </div>
          </section>
        </Form>
      </Formik>
    </>
  );
};

export { LoginPage };
