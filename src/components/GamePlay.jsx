import React, { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState(" ");
  const [showRules , setRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };


  const rollDice = () => {
    if (!selectNumber) {
      setError("please select a number")
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);



    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(null);
    setError(" ")
  };

  const resetScore = () => {
    setScore(0);
  }

  

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} /> { }
        <NumberSelector
          error={error}
          setError={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button
        onClick={() => setRules(prev => !prev)}>
          {
            showRules ? "Hide" : "Show "
          }
          Rules</Button>

      </div>
     {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn{
    margin-top:-10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
