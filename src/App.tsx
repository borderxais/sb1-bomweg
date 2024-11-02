import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MarketResearch } from './components/MarketResearch';
import { StrategyCreation } from './components/StrategyCreation';
import { ContentCreation } from './components/ContentCreation';
import { AdCampaigns } from './components/AdCampaigns';
import { CreatorsMatching } from './components/CreatorsMatching';
import { LiveCopilot } from './components/LiveCopilot';
import { CRM } from './components/CRM';
import { Inventory } from './components/Inventory';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && <Navbar />}
      <main className={`${isAuthenticated ? 'px-4 py-8' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/market-research"
            element={
              isAuthenticated ? <MarketResearch /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/strategy"
            element={
              isAuthenticated ? <StrategyCreation /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/content"
            element={
              isAuthenticated ? <ContentCreation /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/campaigns"
            element={
              isAuthenticated ? <AdCampaigns /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/creators"
            element={
              isAuthenticated ? <CreatorsMatching /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/copilot"
            element={
              isAuthenticated ? <LiveCopilot /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/crm"
            element={
              isAuthenticated ? <CRM /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/inventory"
            element={
              isAuthenticated ? <Inventory /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;