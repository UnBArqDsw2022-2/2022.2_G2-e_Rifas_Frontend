import React from "react";
import "./styles.css";

const CardRifa = () => {
  return (
    <div className="raffle">

      {/* Seção de semi-círculo */}
      <div
        className="container-circle">
        <div
          className="circle"></div>
      </div>

      <div
        className="left-part">
        <h1
          className="title"
          >Volkswagen gol 2018
        </h1>

        <div
          className="img">
          <img></img>
        </div>
      </div>

      {/* PONTILHADO */}
      <div
        className="conteinar-dotted">
          <div
            className="dotted">
          </div>
      </div>

      <div
        className="rigth-part">
        <p
          className="description"
        >Descrição da rifa:  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Descrição da rifa:  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Descrição da rifa:  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div
          className="container-items">
          <p
            className="items">Valor: 
            <span
            style={{
              color: "var(--s5-color)",
            }}> R$50
            </span>
          </p>

          <p
            className="items">Nº restante:  
            <span
            style={{
              color: "var(--t3-color)",
            }}> 12
            </span>
          </p>

          <p
            className="items">Tempo restante:  
            <span
            style={{
              color: "var(--t3-color)",
            }}> 12h
            </span>
          </p>
        </div>

      </div>

    </div>
  );
};

export default CardRifa;