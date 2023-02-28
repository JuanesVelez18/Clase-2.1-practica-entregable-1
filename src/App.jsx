import React, { useState } from 'react';

import users from './assets/users.json';
import Card from './components/Card';
import { getRandomNumber } from './utils/getRandomNumber';

const App = () => {
  const [indexUser, setIndexUser] = useState(getRandomNumber(0, users.length - 1));

  const changeUser = () => {
    const newIndex = getRandomNumber(0, users.length - 1);

    setIndexUser(newIndex);
  };

  return (
    <div>
      <Card userInfo={users[indexUser]} />
      <button onClick={changeUser}>Cambiar</button>
    </div>
  );
};

export default App;
