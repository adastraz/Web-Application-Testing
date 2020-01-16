import React, { useState } from 'react';


function App() {
  const [strike, setStrike] = useState(0)
  const [ball, setBall] = useState(0)

  return (
    <div className="App">
      <button onClick = {() => 
        setStrike(strikeHandler(strike))} 
        className='strike'
      />
      <button onClick = {() => 
        setBall(foulHandler(ball, strike))}
        className='ball'
      />
      <button onClick = {() => 
        setBall(0);
        setStrike(0);}
        className='hit'
      />
    </div>
  );
}

export default App;
