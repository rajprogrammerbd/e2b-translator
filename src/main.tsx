import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import flagsmith from 'flagsmith';
import { FlagsmithProvider as FlagsmithProviderComponent } from 'flagsmith/react';
import { store } from './redux/store';
import App from './App';
import './index.css';

const FlagsmithProvider: any = FlagsmithProviderComponent; // FIXME

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <FlagsmithProvider
    options={{
      environmentID: import.meta.env.VITE_FLAGSMITH_VARIABLE,
      angularHttpClient: null,
    }}
    flagsmith={flagsmith}
  >
    <Provider store={store}>
      <App />
    </Provider>
    </FlagsmithProvider>
  </React.StrictMode>
)
