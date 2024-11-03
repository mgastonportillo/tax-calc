"use client";

import { useState } from "react";
import styles from "./page.module.css";

const fixedFloatPoint = (num: number | string, precision: number): string => {
  const fixedPoint = Number(num).toFixed(precision);
  return fixedPoint;
};

const Home = () => {
  const PAIS = 8;
  const DIG_SERV = 21;
  const RG_AFIP = 30;

  const [totalTax, setTotalTax] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const calcTax = (input: string): string => {
    const taxArray = [PAIS, DIG_SERV, RG_AFIP];
    const taxInt = taxArray.reduce(
      (acc, tax) => acc + Number(input) * (tax / 100),
      0,
    );

    const newTotalTax = fixedFloatPoint(taxInt, 2);
    setTotalTax(newTotalTax);

    return newTotalTax;
  };

  const calcTotal = (input: string, taxes: string) => {
    const total = Number(input) + Number(taxes);
    const newTotal = fixedFloatPoint(total, 2);
    setTotalAmount(newTotal);
  };

  const handleUserInput = (e: React.FormEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const taxAmount = calcTax(userInput);
    calcTotal(userInput, taxAmount);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <section className={styles.section}>
            <label htmlFor="amount-pesos">
              <h2>Amount in pesos</h2>
            </label>
            <br />
            <input
              type="number"
              id="amount-pesos"
              className={styles.input}
              name="amount-pesos"
              placeholder="ARS"
              onChange={handleUserInput}
              min="0"
              required
            />
          </section>
          <section className={styles.section}>
            <h2>Taxes</h2>
            <ul className={styles.list}>
              <li>
                <span>
                  <a href="https://www.afip.gob.ar/impuesto-pais/caracteristicas/cuanto-se-paga.asp">
                    PAIS
                  </a>
                  :
                </span>
                <span>
                  <span className={styles.bold}>{PAIS} </span>%
                </span>
              </li>
              <li>
                <span>
                  <a href="https://biblioteca.afip.gob.ar/search/query/norma.aspx?p=t:RAG|n:4240|o:3|a:2018|f:11/05/2018">
                    IVA Digital Services
                  </a>
                  :
                </span>
                <span>
                  <span className={styles.bold}>{DIG_SERV} </span>%
                </span>
              </li>
              <li>
                <span>
                  <a href="https://biblioteca.afip.gob.ar/search/query/norma.aspx?p=t:RAG|n:4815|o:3|a:2020|f:15/09/2020">
                    Collection RG AFIP N° 4815
                  </a>
                  :
                </span>
                <span>
                  <span className={styles.bold}>{RG_AFIP} </span>%
                </span>
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h2>Tax amount</h2>
            <p className={styles.big}>${fixedFloatPoint(totalTax, 2)}</p>
          </section>
          <section className={styles.section}>
            <h2>Total amount</h2>
            <p className={styles.big}>${fixedFloatPoint(totalAmount, 2)}</p>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Home;
