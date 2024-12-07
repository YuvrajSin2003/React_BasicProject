import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img
                    src={`/images/dice/dice_${currentDice}.png`}
                    alt={`dice ${currentDice}`}
                />
            </div>
            <p>Click on the Dice to Roll</p>
        </DiceContainer>
    );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 

  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .dice {
    cursor: pointer;
    transition: transform 0.2s ease; /* Add a smooth transition for scale effect */
     animation: rollDice 3s ease-in-out;

@keyframes rollDice {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
}
  }

  .dice:hover {
    transform: scale(1.1); 
  }
`;
