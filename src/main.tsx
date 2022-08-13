import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import flagsmith from 'flagsmith';
import { FlagsmithProvider as FlagsmithProviderComponent } from 'flagsmith/react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistorStore } from './redux/store';
import App from './App';
import './index.css';

const FlagsmithProvider: any = FlagsmithProviderComponent;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate persistor={persistorStore}>
            <FlagsmithProvider
              options={{
                environmentID: import.meta.env.VITE_FLAGSMITH_VARIABLE,
                angularHttpClient: null,
              }}
              flagsmith={flagsmith}
            >
              <App />
          </FlagsmithProvider>
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
