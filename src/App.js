import React from 'react';



function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Utsho',
  lastName: 'Sadhak'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);




function App() {
  return (
    <div className="App">
      <h1>{element}</h1>
    </div>
  );
}

export default App;
