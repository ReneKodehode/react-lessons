import React, { useEffect, useState } from "react";
import {
  allPersons,
  numbersConst,
} from "./randomPersonPickerPage/randomPersonConsts";
import {
  RandomPersonBox,
  PageContainer,
  StyledButton,
  RandomText,
} from "./randomPersonPickerPage/randomPersonPickerStyles";

const RandomPersonPickerPage = () => {
  const [randomPerson, setRandomPerson] = useState(allPersons);
  const [randomNumber, setRandomNumber] = useState(0);
  const [animation, setAnimation] = useState();
  const [btnColor, setBtnColor] = useState("white");
  const [animationEnded, setAnimationEnded] = useState();

  useEffect(() => {
    if (animationEnded){
      setBtnColor("black")
    }
    else{
      setBtnColor("white")
      if (animation){
        setRandomNumber(Math.floor(Math.random() * (19 - 1) + 0));
      }
      setAnimation(0);
    }
  })

  const chooseVictim = () =>{
    if (animationEnded && !animation){
        setAnimation("${sneakIn}");
        setAnimationEnded(0);
      }  
  }

  console.log(numbersConst);
  let filteredNumbers = numbersConst.filter((e, index) => {
    return e < 50;
  });
  console.log(filteredNumbers);
  return (
    <PageContainer>
      <RandomPersonBox>
        <RandomText textAnimation={animation} onAnimationEnd={() => {setAnimationEnded(1)}}>{randomPerson[randomNumber]}</RandomText>
      </RandomPersonBox>
      <StyledButton onClick={chooseVictim} backgroundColor={btnColor} txtColor={() => btnColor === "white" ? "red" : "white"}> Button of dethhhhh</StyledButton>
    </PageContainer>
  );
};

export default RandomPersonPickerPage;
