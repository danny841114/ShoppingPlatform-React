import { Fragment } from "react/jsx-runtime";

export default function Login() {
  return (
    <Fragment>
      <div
        className="container mt-5 justify-content-center align-items-center"
        style={{ width: 300 }}
      >
        <h3 className="text-center">登入</h3>
        <div>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text" htmlFor="account">帳&emsp;&emsp;號</span>
              <input
                type="text"
                className="form-control"
                id="account"
                required
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" htmlFor="password">
                密&emsp;&emsp;碼
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
