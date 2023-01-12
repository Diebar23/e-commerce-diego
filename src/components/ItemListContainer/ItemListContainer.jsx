import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/Flex";


function ItemListContainer() {
  const [product, setProduct] = useState([

    {
      id: 1,
      title: "Hamburguesa Paty",
      category: "Hamburguesa",
      stock: 10,
      img: "../../img/Hamburguesa Paty.jpg",
      detail: "Paty Clasica x 4u",
      price: 500,
    
    },
    {
      id: 2,
      title: "Hamburguesa Swift",
      category: "Hamburguesa",
      stock: 8,
      img: "../../img/Hamburguesa Swift.jpg",
      detail: "Swift Clasica x 4u",
      price: 400,

    },
    {
      id: 3,
      title: "Medallones Swift",
      category: "Pollo",
      stock: 6,
      img: "../../img/Medallon de pollo Swift.jpg",
      detail: "Medallones de pollo x 4u",
      price: 600,
    },
    {
      id: 4,
      title: "Milanesa de Soja",
      category: "Vegetariano",
      stock: 8,
      img: "../../img/Milanesa de soja Swift.jpg",
      detail: "Milanesas de Soja Swift x 4u",
      price: 500,

    },
  ]);

  useEffect(() => {
    product()
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(error));
  }, []);


  return (
    <Flex>
      {product.map((Productos) => {
        return (
          <Item id={Productos.id} key={Productos.id} item={Productos} />
        );
      })}
    </Flex>
  );
}

export default ItemListContainer;
