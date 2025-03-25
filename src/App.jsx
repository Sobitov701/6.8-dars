import YourCart from "./componets/YourCart";
import ProductList from "./componets/ProductLIst";
import useFetch from "./hooks/useFetch";

function App() {
  const {
    data: dessert,
    loading,
    error,
  } = useFetch("http://localhost:3000/desserts");

  return (
    <div className="container grid-container">
      {<ProductList dessert={dessert} loading={loading} />}
      <YourCart />
    </div>
  );
}

export default App;
