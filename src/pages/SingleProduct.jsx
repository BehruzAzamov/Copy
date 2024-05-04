import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import { customFetch, formatPrice } from "../utils"

export const loader = async ({ params }) => {
  const request = customFetch(`/products/${params.id}`)
  return { product: request.data.data }
}

const SingleProduct = () => {
  const { product } = useLoaderData()
  console.log(product);

  return (
    <div>
      SingleProduct
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officia
        facere quam eius amet repellat, dignissimos praesentium aut deleniti
        quis non placeat enim at obcaecati, nulla minus distinctio ipsam magni.
      </p>
    </div>
  );
};

export default SingleProduct;
