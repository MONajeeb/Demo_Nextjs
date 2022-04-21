import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const id = router.query.productid;
  return <h1>this product number {id}</h1>;
}

export default ProductDetails;
