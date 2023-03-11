import * as React from "react";

type JugadorProps = {
    name: String,
    identifier: String,
    age?: Number
}

const Jugador = (props: JugadorProps) => {
    return <div>
        <b> Jugador: {props.name} </b>
        <p> Identificador: {props.identifier} Edad: {props.age}</p>
      </div>
}

export default Jugador;
