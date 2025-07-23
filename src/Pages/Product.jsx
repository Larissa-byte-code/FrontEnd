import React, { useContext } from "react";
import { useParams } from 'react-router-dom'; // pour récupérer l’ID depuis l’URL
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  // 💡 Vérifie que productId est bien un nombre et trouve le produit correspondant
  const product = all_product.find(e => e.id === Number(productId));

  // 🛡️ Si aucun produit trouvé, affiche un message clair
  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Produit introuvable ❌</h2>
        <p>Aucun produit ne correspond à l’ID : {productId}</p>
      </div>
    );
  }

  // ✅ Affiche la fiche produit si trouvé
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
