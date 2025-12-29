import { useState } from 'react';
import { Lock, Bell } from 'lucide-react';

export function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [budgetAlerts, setBudgetAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  const handleChangePassword = () => {
    console.log('Opening change password dialog...');
    // Would open a modal or navigate to password change page
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-700 mb-1">Settings</h1>
        <p className="text-gray-600">Manage your account and system settings</p>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Lock className="text-[#228B22]" size={20} />
          </div>
          <h2 className="text-gray-800">Security</h2>
        </div>
        
        <button
          onClick={handleChangePassword}
          className="bg-[#228B22] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b1a] transition-colors"
        >
          Change Password
        </button>
      </div>

      {/* Notifications Section */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Bell className="text-blue-600" size={20} />
          </div>
          <h2 className="text-gray-800">Notifications</h2>
        </div>

        <div className="space-y-4">
          {/* Email Notifications */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="w-5 h-5 text-[#228B22] border-gray-300 rounded focus:ring-[#228B22] cursor-pointer"
            />
            <span className="text-gray-700">Email notifications</span>
          </label>

          {/* Budget Alerts */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={budgetAlerts}
              onChange={(e) => setBudgetAlerts(e.target.checked)}
              className="w-5 h-5 text-[#228B22] border-gray-300 rounded focus:ring-[#228B22] cursor-pointer"
            />
            <span className="text-gray-700">Budget alerts</span>
          </label>

          {/* Weekly Reports */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={weeklyReports}
              onChange={(e) => setWeeklyReports(e.target.checked)}
              className="w-5 h-5 text-[#228B22] border-gray-300 rounded focus:ring-[#228B22] cursor-pointer"
            />
            <span className="text-gray-700">Weekly reports</span>
          </label>
        </div>
      </div>
    </div>
  );
}
