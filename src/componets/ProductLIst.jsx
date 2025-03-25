import Product from "./product";

function ProductList({ dessert, loading }) {
  return (
    <div className="desserts">
      <h1 className="disserts-title">Disserts</h1>
      {loading && <h2>loading...</h2>}
      <div className="disserts-container">
        {dessert &&
          dessert.map((d) => {
            return <Product d={d} key={d.id} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
