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

  const chooseVictim = () =>
    setRandomNumber(Math.floor(Math.random() * (33 - 1) + 0));

  console.log(numbersConst);
  let filteredNumbers = numbersConst.filter((e, index) => {
    return e < 50;
  });
  console.log(filteredNumbers);
  return (
    <PageContainer>
      <RandomPersonBox>
        <RandomText>{randomPerson[randomNumber]}</RandomText>
      </RandomPersonBox>
      <StyledButton onClick={chooseVictim}> Button of dethhhhh</StyledButton>
    </PageContainer>
  );
};

export default RandomPersonPickerPage;
