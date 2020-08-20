import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <>
      <h1>hi! Archbold</h1>
      {productList.map((product) => (
        <>
          <div>{product.name}</div>
          <Link href="/product/[productId]" as={`/product/${product.id}`}>
            <button>{product.name}</button>
          </Link>
        </>
      ))}
    </>
  );
};

export default Home;
