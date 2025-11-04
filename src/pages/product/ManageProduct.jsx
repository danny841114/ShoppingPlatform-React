import { useEffect, useState } from "react";
import { getProductImageUrl, getProductsByVendor } from "../../util/api";

export default function ManageProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByVendor()
      .then((res) => {
        setProducts(res.data);
        console.log("取得商品成功：", res.data);
      })
      .catch((err) => {
        console.error("取得商品失敗：", err);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h3>管理商品</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                名稱
              </th>
              <th scope="col" className="text-center">
                描述
              </th>
              <th scope="col" className="text-center">
                價格
              </th>
              <th scope="col" className="text-center">
                數量
              </th>
              <th scope="col" className="text-center">
                上架日期
              </th>
              <th scope="col" className="text-center">
                圖片
              </th>
              <th scope="col" className="text-center">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p.id} style={{ height: 100 }}>
                <th className="align-middle text-center" scope="row">
                  {index + 1}
                </th>
                <td className="align-middle text-center">{p.name}</td>
                <td className="align-middle text-center">{p.description}</td>
                <td className="align-middle text-center">{p.price}</td>
                <td className="align-middle text-center">{p.quantity}</td>
                <td className="align-middle text-center">{p.date}</td>
                <td className="align-middle text-center">
                  <img
                    src={getProductImageUrl(p.id)}
                    alt="商品圖片"
                    height="80"
                  />
                </td>
                <td className="align-middle text-center">
                  <a className="btn btn-success" href="www.google.com">
                    修改
                  </a>
                  <a
                    href="www.google.com"
                    className="btn btn-danger"
                    style={{ marginLeft: 10 }}
                  >
                    刪除
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
