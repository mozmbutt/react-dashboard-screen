import React from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar';
import './App.css'
import SessionGuide from './components/SessionGuide';
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/Dashboard';
import SomeAdminView from './components/SomeAdminView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRouteGauard from './routes/AdminRouteGauard';
import ExpertRouteGaurd from './routes/ExpertRouteGaurd';
import CompanyRouteGaurd from './routes/CompanyRouteGaurd';

function App() {
  const state = {
    user: {
      isLoggedIn: true,
      id: 1,
      name: 'user',
      role: 'company'
    }
  }

  const isAdmin = () => {
    return state.user.role == 'admin'
  }

  const isExpert = () => {
    return state.user.role == 'expert'
  }

  const isCompany = () => {
    return state.user.role == 'company'
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path="/" element={<Body />} />

            <Route exact path='/admin' element={<AdminRouteGauard isAdmin={isAdmin} />}>
              <Route exact path='/admin/admin-view' element={<SomeAdminView />} />
            </Route>

            <Route exact path='/expert' element={<ExpertRouteGaurd isExpert={isExpert} />}>
              <Route exact path="/expert/guide" element={<SessionGuide />} />
            </Route>
            
            <Route exact path='/company' element={<CompanyRouteGaurd isCompany={isCompany} />}>
              <Route exact path="/company/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;