import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './index.css';

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import MainDashboard from './Pages/MainDashboard';
import Leads from './Pages/Leads';
import MissedLeads from './Pages/MissedLeads';
import Reminders from './Pages/Reminders';
import Report from './Pages/Report';
import FullLeads from './Pages/FullLeads';
import DynamicTable from './Components/DynmicTables';
import Profile from './Pages/Profile';
import Priority from './Pages/Settings/Priority';
import Source from './Pages/Settings/Sources';
import Tag from './Pages/Settings/Tag';
import LeadStatus from './Pages/Settings/LeadStatus';
import FollowUpNotes from './Components/FollowUpNotes';
import DynamicCard from './Components/DynamicCard';
import ClosedLead from './Pages/ClosedLead';
import NegativeLead from './Pages/NegativeLead';
import Calander from './Pages/Calander';
import PendingLeads from './Pages/PendingLeads';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path='/' element={<Login />} />

        {/* Protected Routes */}
        <Route path='/employeeDashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/main' element={<ProtectedRoute><MainDashboard /></ProtectedRoute>} />
        <Route path='/leads' element={<ProtectedRoute><Leads /></ProtectedRoute>} />
        <Route path='/missedLeads' element={<ProtectedRoute><MissedLeads /></ProtectedRoute>} />
        <Route path='/todayRminders' element={<ProtectedRoute><Reminders /></ProtectedRoute>} />
        <Route path='/report' element={<ProtectedRoute><Report /></ProtectedRoute>} />
        <Route path='/DynamicTable' element={<ProtectedRoute><DynamicTable /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/card' element={<ProtectedRoute><DynamicCard /></ProtectedRoute>} />
        <Route path='/calender' element={<ProtectedRoute><Calander /></ProtectedRoute>} />
        <Route path='/pending' element={<ProtectedRoute><PendingLeads /></ProtectedRoute>} />

        {/* Settings Pages */}
        <Route path='/priority' element={<ProtectedRoute><Priority /></ProtectedRoute>} />
        <Route path='/source' element={<ProtectedRoute><Source /></ProtectedRoute>} />
        <Route path='/tag' element={<ProtectedRoute><Tag /></ProtectedRoute>} />
        <Route path='/status' element={<ProtectedRoute><LeadStatus /></ProtectedRoute>} />
        <Route path='/closed' element={<ProtectedRoute><ClosedLead /></ProtectedRoute>} />
        <Route path='/negative' element={<ProtectedRoute><NegativeLead /></ProtectedRoute>} />

        {/* Full Leads Pages */}
        <Route path='/Main/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />
        <Route path='/todayRminders/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />
        <Route path='/leads/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />
        <Route path='/missedLeads/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />
        <Route path='/closed/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />
        <Route path='/negative/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />
        <Route path='/calender/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />
        <Route path='/pending/fullLeads' element={<ProtectedRoute><FullLeads /></ProtectedRoute>} />

        <Route path='/notes' element={<ProtectedRoute><FollowUpNotes /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
