import { Fragment } from "react/jsx-runtime";

export default function Register() {
  return (
    <Fragment>
      <div
        className="container mt-5 justify-content-center align-items-center"
        style={{ width: 300 }}
      >
        <h3 className="text-center">註冊</h3>
        <form>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="account">
              帳&emsp;&emsp;號
            </label>
            <input type="text" className="form-control" id="account" required />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="password">
              密&emsp;&emsp;碼
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="passwordConfirm">
              密碼確認
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              註冊
            </button>
          </div>

          <div className="mb-3 text-danger text-center">&nbsp;</div>
          <div className="mb-3 text-danger text-center">帳號錯誤</div>
          <div className="mb-3 text-danger text-center">密碼錯誤</div>
          <div className="mb-3 text-danger text-center">密碼確認錯誤</div>
        </form>
      </div>
    </Fragment>
  );
}
