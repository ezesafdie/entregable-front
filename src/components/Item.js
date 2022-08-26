import React from "react";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

const Item = (props) => {
  const calcularStock = () => {
    if (props.json.stock > 0) {
      return props.json.stock;
    } else {
      return <span>Agotado</span>;
    }
  };

  const restarStock = () => {
    if (props.json.stock > 0) {
      props.setElementosCarrito(props.elementosCarrito + 1);
      props.json.stock = props.json.stock - 1;
    }
  };

  return (
    <div className="producto">
      <h3>{props.json.producto.nombre}</h3>
      <p>{props.json.producto.descripcion}</p>
      <h5>En Stock: {calcularStock()}</h5>
      <button
        onClick={() => {
          restarStock();
        }}
        disabled={props.json.stock <= 0}
      >
        {props.json.stock > 0 ? "Comprar" : "Sin stock"}
      </button>
    </div>
  );
};

export default Item;
