import { Fragment } from "react/jsx-runtime";

export default function AddProduct() {
  return (
    <Fragment>
      <div className="container mt-5">
        <h3>上架商品</h3>
        <form>
          <div className="input-group mb-3">
            <label className="input-group-text" for="name">
              名稱
            </label>
            <input
              type="text"
              className="form-control"
              required
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" for="description">
              描述
            </label>
            <textarea
              className="form-control"
              rows="3"
            ></textarea>
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" for="price">
              價格
            </label>
            <input
              type="number"
              className="form-control"
              min="1"
              required
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" for="quantity">
              數量
            </label>
            <input
              type="number"
              className="form-control"
              min="1"
              required
            />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" for="photo">
              圖片
            </label>
            <input type="file" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">
            送出
          </button>
          <a
            className="btn btn-secondary"
            href="/product/manage"
            style={{ marginLeft: 10 }}
          >
            返回
          </a>
        </form>
      </div>
    </Fragment>
  );
}