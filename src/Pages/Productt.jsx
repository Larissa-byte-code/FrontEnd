import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const numericId = parseInt(productId, 10);
  const product = all_product.find((e) => e.id === numericId);

  if (!product) {
    return (
      <div className="product-error">
        <h2>Produit introuvable ❌</h2>
        <p>Aucun produit ne correspond à l’ID : {productId}</p>
      </div>
    );
  }

  return (
    <div className="product-page">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
