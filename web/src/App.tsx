import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">WealthMinder</h1>
            <p className="text-gray-600">Investment Portfolio Management</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;