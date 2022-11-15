import React from 'react';
import { ProviderWrapper } from '../../contexts/countersContext';
import App from './App';

const AppContainer = () => {
  return (
    <ProviderWrapper>
      <App/>
    </ProviderWrapper>
  );
}

export default AppContainer;