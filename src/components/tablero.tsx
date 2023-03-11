import * as React from "react";
import Celda from "./celda";

type TableroProps = {
  celdas: String[];
  handleCelClick: any;
};

const Tablero = (props: TableroProps) => {
  return (
    <div className="tablero">
      {props.celdas.map((celda, i) => (
        <Celda
          key={i}
          id={i}
          value={celda}
          handleCelClick={props.handleCelClick(i)}
        />
      ))}
    </div>
  );
};

export default Tablero;
