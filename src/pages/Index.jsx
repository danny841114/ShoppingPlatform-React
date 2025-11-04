import { useEffect, useState } from "react";
import { getProductImageUrl, getProducts } from "../util/api";

export default function Index() {
  const [products, setProducts] = useState([]); // 陣列解構賦值（array destructuring）

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data); // 之後加入搜尋條件時要改
      })
      .catch((err) => {
        console.error("取得商品失敗：", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h3>商品列表</h3>

      <div className="mt-2">總共有 {products.length} 個商品</div>

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
        {products.map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: 288 }}>
              <img
                // src={`${API_BASE_URL}/api/product/${p.id}/photo`}
                src={getProductImageUrl(p.id)}
                className="card-img-top p-4"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
                <p className="card-text text-muted">賣家：{p.member?.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
