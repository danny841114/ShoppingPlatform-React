export default function ModifyProuct() {
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
            <tr style={{ height: 100 }}>
              <th class="align-middle text-center" scope="row">
                流水號{" "}
              </th>
              <td className="align-middle text-center">產品名稱</td>
              <td className="align-middle text-center">產品描述</td>
              <td className="align-middle text-center">產品價格</td>
              <td className="align-middle text-center">產品數量</td>
              <td className="align-middle text-center">上架日期</td>
              <td className="align-middle text-center">
                <img src="" alt="商品圖片" height="80" />
              </td>
              <td className="align-middle text-center">
                <a className="btn btn-success" href="www.google.com">
                  修改
                </a>
                <a
                  type="button"
                  className="btn btn-danger"
                  href="www.google.com"
                  style={{ marginLeft: 10 }}
                >
                  刪除
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
