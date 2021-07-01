import React from 'react';


function makingName(user){
  return user.first + ' ' + user.last;
}


const user = {
  first:'joy',
  last:'dhangra',
}


const show =(
  <h1>How are you {makingName(user)}?</h1>
);


setInterval(tick, 1000);


function App() {
  return (
    <div className="App">
      <h1>{show}</h1>

    </div>
  );
}

export default App;
