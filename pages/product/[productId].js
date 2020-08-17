import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId }
  } = useRouter();

  
  return (
    <>
      <h1>Test pag to product item: {productId}</h1>
    </>
  );
};

export default ProductItem;
