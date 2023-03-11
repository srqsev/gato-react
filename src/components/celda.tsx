import * as React from "react";

type CeldaProps = {
  id: Number;
  value?: Object;
  handleCelClick: any;
};

const Celda = (props: CeldaProps) => (
  <div
    className="celda"
    data-jugador={props.value}
    onClick={props.handleCelClick}
  />
);

export default Celda;

//{props.id}
