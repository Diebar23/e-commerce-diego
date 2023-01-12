import React, { useState, useEffect } from "react";
import { getProduct } from "../ItemListContainer/ItemListContainer";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    product()
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail
      title={product.name}
      img={product.img}
      category={product.category}
      price={product.price}
      detail={product.detail}
    />
  );
}

export default ItemDetailContainer;