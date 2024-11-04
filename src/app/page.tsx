"use client";

import { useId, useState } from "react";
import Amount from "@/components/amount/Amount";
import CalcCard from "@/components/calcCard/CalcCard";
import CalcSection from "@/components/calcSection/CalcSection";
import Input from "@/components/input/Input";
import ListItem from "@/components/listItem/ListItem";
import Title from "@/components/title/Title";

import { fixedFloatPoint } from "@/utils/numUtils";
import { taxData } from "@/data/taxData";
import styles from "./page.module.css";

const Home = () => {
  const PAIS = 8;
  const DIG_SERV = 21;
  const RG_AFIP = 30;

  const [totalTax, setTotalTax] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const id = useId();

  const handleUserInput = (e: React.FormEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    const taxArray = [PAIS, DIG_SERV, RG_AFIP];
    const taxInt = taxArray.reduce(
      (acc, tax) => acc + Number(userInput) * (tax / 100),
      0,
    );

    const newTotalTax = fixedFloatPoint(taxInt, 2);
    const newTotal = fixedFloatPoint(Number(userInput) + taxInt, 2);

    setTotalTax(newTotalTax);
    setTotalAmount(newTotal);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CalcCard>
          <CalcSection>
            <label htmlFor="amount-pesos">
              <Title>Amount in pesos</Title>
            </label>
            <Input
              type="number"
              id="amount-pesos"
              name="amount-pesos"
              placeholder="ARS"
              handleInput={handleUserInput}
              min="0"
              required
            />
          </CalcSection>
          <CalcSection>
            <Title>Taxes</Title>
            <ul className={styles.list}>
              {taxData.map((item) => {
                const key = `${id}-${item.value}`;
                return (
                  <ListItem
                    key={key}
                    title={item.title}
                    value={item.value}
                    href={item.href}
                  />
                );
              })}
            </ul>
          </CalcSection>
          <CalcSection>
            <Amount title="Tax amount" amount={totalTax} />
            <br />
            <Amount title="Total amount" amount={totalAmount} />
          </CalcSection>
        </CalcCard>
      </main>
    </div>
  );
};

export default Home;
