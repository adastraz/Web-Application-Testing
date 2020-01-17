import React, { useState } from 'react';
import styled from 'styled-components'
import Display from './Display'
function App() {
  const [strike, setStrike] = useState(0)
  const [ball, setBall] = useState(0)

  const Button = styled.button `
  padding:1rem;
  background-color:lightblue
  `
  const Butt = styled.div`
  display:flex;
  justify-content:center
  `
  // const strikeHandler = strike => {
  //   if (strike<2){
  //     setStrike(strike+1)
  // }else{
  //     setStrike(0)
  //     setBall(0)
  //   }
  // }
  const fouldHandler = (foul, strike) => {
    if (foul<3 && strike<2){
      setBall(foul+1)
      setStrike(strike+1)
      return(foul+1, strike+1)
    }
    else if(foul<3 && strike===2){
      setBall(foul+1)
      return foul+1
    }
    else{
      setBall(foul)
      return foul
    }
  }
  const resetHit = () => {
    setBall(0)
    setStrike(0)
  }
  return (
    <div className="App">
      <Butt>
        <Button 
          data-testid='strikeTest'
          onClick = {() => 
          strikeHandler(strike, ball)} 
          className='strike'
        >Strike</Button>
        <Button 
          data-testid='ballTest'
          onClick = {() => 
          fouldHandler(ball, strike)}
          className='ball'
        >Ball</Button>
        <Button onClick = {() => 
          resetHit()}
          className='hit'
        >Hit</Button>
      </Butt>
      <Display 
      strike={strike}
      ball={ball}
      />
    </div>
  );
}

export default App;
