// import userEvent from '@testing-library/user-event';
import React from 'react';


function fahim (joy) {
  return joy.you + ' ' + joy.me;
}

const joy = {
  you: 'joy',
  me: 'dhangra'
};


const waw = (
  <h1>{fahim(joy)}</h1>
)

function App() {
  return (
    <div className="App">
      <h1>{waw}</h1>
    </div>
  );
}

export default App;
