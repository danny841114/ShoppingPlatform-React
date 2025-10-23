import { Fragment } from "react/jsx-runtime";

export default function Index() {
  return (
    <Fragment>
      <div className="container mt-5">
        <h3>商品列表</h3>

        <div className="mt-2" v-if="totalElements">
          總共有 N 個商品
        </div>

        <div className="mt-2">
          <form>
            <label htmlFor="sizeSelect">每頁顯示&emsp;</label>
            <select id="sizeSelect">
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
            <span>&emsp;個商品</span>
          </form>
        </div>

        <div className="mt-2">
          <button className="btn btn-primary">上一頁</button>

          <span>&emsp;第 N 頁&emsp;</span>

          <button className="btn btn-primary">下一頁</button>

          <span>&emsp;共 N 頁&emsp;</span>
        </div>

        <div className="row mt-3">
          <div className="col-md-3 mb-4">
            <div className="card" style={{ width: 288 }}>
              {/* 18rem=18rem */}
              {/* <img src="" className="card-img-top p-4" alt="Product Image" /> */}
              <div className="card-body">
                <h5 className="card-title">產品名稱</h5>
                <p className="card-text">產品描述</p>
                <p className="card-text">賣家名稱</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
