import { useState } from "react";
import { login } from "../../util/api";

export default function Login() {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 防止表單預設重整頁面
    try {
      const res = await login({ account, password });
      document.cookie = "jwt=" + res.data.token + "; path=/";
      console.log("登入成功：", res.data);
      alert("登入成功");
    } catch (e) {
      console.error("登入失敗：", e);
      alert("登入失敗，請確認帳號密碼");
    }
  };

  return (
    <div
      className="container mt-5 justify-content-center align-items-center"
      style={{ width: 300 }}
    >
      <h3 className="text-center">登入</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="account">
              帳&emsp;&emsp;號
            </span>
            <input
              type="text"
              className="form-control"
              id="account"
              value={account}
              onChange={(e) => setAccount(e.target.value)} // 綁定輸入
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
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 綁定輸入
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
  );
}
