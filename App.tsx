/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import { MainNavigation } from './navigation';
import { UsersProvider } from './src/context/UsersContext';

function App() {
  return (
    <UsersProvider>
      <MainNavigation />
    </UsersProvider>
  );
}

export default App;
