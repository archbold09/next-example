import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fetch from 'isomorphic-unfetch'

import Link from "next/link";
const ProductItem = () => {
  const [product, setProduct] = useState([]);

  const {
    query: { productId }
  } = useRouter();

  useEffect(() => {
    if (productId) {
      fetch(`/api/avo/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [productId]);


  return (
    <>
      <section>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.price}</p>
      </section>
    </>
  );
};

export default ProductItem;
