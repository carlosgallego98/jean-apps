import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './app/app';
import 'leaflet/dist/leaflet.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
