import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { AdminLoginPage } from './components/AdminLoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { Dashboard } from './components/Dashboard';
import { BudgetAllocationPage } from './components/BudgetAllocationPage';
import { ExpenseMonitoringPage } from './components/ExpenseMonitoringPage';
import { ReportsPage } from './components/ReportsPage';
import { UserManagementPage } from './components/UserManagementPage';
import { DocumentManagementPage } from './components/DocumentManagementPage';
import { AuditTrailPage } from './components/AuditTrailPage';
import { SettingsPage } from './components/SettingsPage';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#B8B4C8] flex items-center justify-center p-4">
            <LoginPage />
          </div>
        } />
        <Route path="/admin" element={
          <div className="min-h-screen bg-[#B8B4C8] flex items-center justify-center p-4">
            <AdminLoginPage />
          </div>
        } />
        <Route path="/register" element={
          <div className="min-h-screen bg-[#B8B4C8] flex items-center justify-center p-4">
            <RegistrationPage />
          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/budget-allocation"
          element={
            <div className="flex min-h-screen bg-[#B8B4C8]">
              <Sidebar activePage="budget" />
              <main className="flex-1 p-6">
                <BudgetAllocationPage />
              </main>
            </div>
          }
        />
        <Route
          path="/expense-monitoring"
          element={
            <div className="flex min-h-screen bg-[#B8B4C8]">
              <Sidebar activePage="expense" />
              <main className="flex-1 p-6">
                <ExpenseMonitoringPage />
              </main>
            </div>
          }
        />
        <Route
          path="/reports"
          element={
            <div className="flex min-h-screen bg-[#B8B4C8]">
              <Sidebar activePage="reports" />
              <main className="flex-1 p-6">
                <ReportsPage />
              </main>
            </div>
          }
        />
        <Route
          path="/user-management"
          element={
            <div className="flex min-h-screen bg-[#B8B4C8]">
              <Sidebar activePage="users" />
              <main className="flex-1 p-6">
                <UserManagementPage />
              </main>
            </div>
          }
        />
        <Route
          path="/documents"
          element={
            <div className="flex min-h-screen bg-[#B8B4C8]">
              <Sidebar activePage="documents" />
              <main className="flex-1 p-6">
                <DocumentManagementPage />
              </main>
            </div>
          }
        />
        <Route
          path="/audit-trail"
          element={
            <div className="flex min-h-screen bg-[#B8B4C8]">
              <Sidebar activePage="audit" />
              <main className="flex-1 p-6">
                <AuditTrailPage />
              </main>
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="flex min-h-screen bg-[#B8B4C8]">
              <Sidebar activePage="settings" />
              <main className="flex-1 p-6">
                <SettingsPage />
              </main>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}