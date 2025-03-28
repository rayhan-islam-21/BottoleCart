import { Suspense } from "react";
import "./App.css";
import Products from "./Components/Products/Products";

const productDataPromise = fetch("./utils/data.json").then(res=>res.json())

function App() {
  return <>
  
  <Suspense>
    <Products productDataPromise={productDataPromise}  ></Products>
  </Suspense>
  
  
  </>;
}

export default App;
