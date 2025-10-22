import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            電商平台
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="搜尋商品"
                    aria-label="Search"
                    v-model="keyword"
                    required
                  />
                </li>
                <li className="nav-item">&emsp;</li>
                <li className="nav-item">
                  <button className="btn btn-outline-success" type="submit">
                    搜尋
                  </button>
                </li>
                <li className="nav-item">&emsp;</li>
              </ul>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  首頁
                </a>
              </li>
              <li className="nav-item" v-if="!isLogin">
                <a className="nav-link" href="/member/login">
                  登入
                </a>
              </li>
              <li className="nav-item" v-if="!isLogin">
                <a className="nav-link" href="/member/register">
                  註冊
                </a>
              </li>
              <li className="nav-item" v-if="isLogin">
                <span className="nav-link disabled">帳號</span>
              </li>
              <li className="nav-item" v-if="role == 'VENDOR'">
                <a className="nav-link" href="/product/add">
                  上架商品
                </a>
              </li>
              <li className="nav-item" v-if="role == 'VENDOR'">
                <a className="nav-link" href="/product/manage">
                  管理商品
                </a>
              </li>
              <li className="nav-item" v-if="isLogin">
                <a className="nav-link" href="/">
                  登出
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: 70 }}></div>
    </Fragment>
  );
}
