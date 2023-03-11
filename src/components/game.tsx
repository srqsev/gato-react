import React, { Component } from "react";
import Tablero from "./tablero";
import Jugador from "./jugador";

type Jugador = {
  name: String;
  identifier: String;
  age?: Number;
};

interface IGame {
  celdas: String[];
  jugadores: Jugador[];
  turno: Jugador;
  gameFinish: Boolean;
  gameWin: Boolean;
  movimientos: Number;
}

const InitialState = {
  celdas: ["", "", "", "", "", "", "", "", ""],
  jugadores: [
    { name: "Dailenis", identifier: "X", age: 30 },
    { name: "Matias", identifier: "O" }
  ],
  turno: { name: "Dailenis", identifier: "X", age: 30 },
  gameFinish: false,
  movimientos: 0,
  gameWin: false
};

class Game extends Component<{}, IGame> {
  public state = InitialState;

  public switchPlayerTurn = () => {
    const { turno, jugadores } = this.state;
    //actualizar turno
    let next_player = jugadores[0];
    if (turno.identifier == "X") {
      // X [0]
      next_player = jugadores[1];
    }
    if (turno.identifier == "O") {
      //O [1]
      next_player = jugadores[0];
    }
    this.setState({ turno: next_player });
  };

  public validateGameFinish = (newCeldas: String[], movimientos: Number) => {
    //Validar Horizontales: 0,1,2 - 3,4,5 - 6-7-8
    if (
      newCeldas[0] === newCeldas[1] &&
      newCeldas[1] === newCeldas[2] &&
      newCeldas[2] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });
      return true;
    }
    if (
      newCeldas[3] === newCeldas[4] &&
      newCeldas[4] === newCeldas[5] &&
      newCeldas[5] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });

      return true;
    }
    if (
      newCeldas[6] === newCeldas[7] &&
      newCeldas[7] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });
      return true;
    }
    //Validar Verticales: 0,3,6 - 1,4,7 - 2,5,8
    if (
      newCeldas[0] === newCeldas[3] &&
      newCeldas[3] === newCeldas[6] &&
      newCeldas[6] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });
      return true;
    }
    if (
      newCeldas[1] === newCeldas[4] &&
      newCeldas[4] === newCeldas[7] &&
      newCeldas[7] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });
      return true;
    }
    if (
      newCeldas[2] === newCeldas[5] &&
      newCeldas[5] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });
      return true;
    }
    //Validar Diagonales 0,4,8  - 2,4,6
    if (
      newCeldas[0] === newCeldas[4] &&
      newCeldas[4] === newCeldas[8] &&
      newCeldas[8] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });
      return true;
    }
    if (
      newCeldas[2] === newCeldas[4] &&
      newCeldas[4] === newCeldas[6] &&
      newCeldas[6] !== ""
    ) {
      this.setState({ gameFinish: true, gameWin: true });
      return true;
    }
    if (movimientos === 9) {
      this.setState({ gameFinish: true });
    }
    return false;
  };

  public handleCelClick = (index: any) => () => {
    const { turno, celdas, gameFinish } = this.state;
    if (!gameFinish && celdas[index] === "") {
      let newCeldas = [...celdas];
      //actualizar tablero
      newCeldas[index] = turno.identifier;
      let movimientos = this.state.movimientos + 1;
      this.setState({ celdas: newCeldas, movimientos });
      const gameFinish = this.validateGameFinish(newCeldas, movimientos);
      if (!gameFinish) {
        this.switchPlayerTurn();
      }
    }
  };

  public restartGame = () => {
    this.setState(InitialState);
  };

  render() {
    const { celdas, jugadores, turno, gameFinish, gameWin } = this.state;
    return (
      <div>
        {gameWin
          ? `Juego ganado por ${turno.name}`
          : gameFinish
            ? "Nadie ganó el juego"
            : `Turno de ${turno.name}`}
        <br />
        <button onClick={this.restartGame}>Reiniciar Juego</button>
        <br />
        <Tablero celdas={celdas} handleCelClick={this.handleCelClick} />
        {jugadores.map((jugador, i) => (
          <Jugador
            key={i}
            name={jugador.name}
            identifier={jugador.identifier}
            age={jugador.age}
          />
        ))}
      </div>
    );
  }
}

export default Game;
