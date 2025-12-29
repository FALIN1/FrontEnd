import { useState } from 'react';
import { Search, Download, Eye } from 'lucide-react';

interface AuditLog {
  id: number;
  timestamp: string;
  action: 'CREATE' | 'APPROVE' | 'REJECT' | 'UPDATE' | 'DELETE';
  category: string;
  user: string;
  role: string;
  description: string;
}

const auditLogsData: AuditLog[] = [
  {
    id: 1,
    timestamp: 'Nov 15, 2024 at 10:30 AM',
    action: 'CREATE',
    category: 'Budget',
    user: 'System Admin',
    role: 'Barangay Captain',
    description: 'Created budget allocation for Health Services',
  },
  {
    id: 2,
    timestamp: 'Nov 20, 2024 at 09:15 AM',
    action: 'APPROVE',
    category: 'User Management',
    user: 'System Admin',
    role: 'Barangay Captain',
    description: 'Approved user registration for Maria Santos',
  },
];

export function AuditTrailPage() {
  const [logs] = useState(auditLogsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionFilter, setActionFilter] = useState('All Actions');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  const totalEvents = logs.length;
  const todayEvents = 0; // Would filter by today's date
  const budgetActions = logs.filter(log => log.category === 'Budget').length;
  const userActions = logs.filter(log => log.category === 'User Management').length;

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAction = actionFilter === 'All Actions' || log.action === actionFilter;
    const matchesCategory = categoryFilter === 'All Categories' || log.category === categoryFilter;
    return matchesSearch && matchesAction && matchesCategory;
  });

  const getActionColor = (action: string) => {
    switch (action) {
      case 'CREATE':
        return 'bg-green-100 text-green-700';
      case 'APPROVE':
        return 'bg-purple-100 text-purple-700';
      case 'REJECT':
        return 'bg-red-100 text-red-700';
      case 'UPDATE':
        return 'bg-blue-100 text-blue-700';
      case 'DELETE':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleExport = () => {
    console.log('Exporting audit logs...');
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-700 mb-1">Audit Trail</h1>
        <p className="text-gray-600">Complete log of all system activities and changes</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-5">
          <h3 className="text-gray-600 mb-2">Total Events</h3>
          <p className="text-3xl text-gray-900">{totalEvents}</p>
        </div>
        <div className="bg-white rounded-xl p-5">
          <h3 className="text-gray-600 mb-2">Today</h3>
          <p className="text-3xl text-gray-900">{todayEvents}</p>
        </div>
        <div className="bg-white rounded-xl p-5">
          <h3 className="text-gray-600 mb-2">Budget Actions</h3>
          <p className="text-3xl text-gray-900">{budgetActions}</p>
        </div>
        <div className="bg-white rounded-xl p-5">
          <h3 className="text-gray-600 mb-2">User Actions</h3>
          <p className="text-3xl text-gray-900">{userActions}</p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search audit logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22]"
            />
          </div>

          {/* Action Filter */}
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22] bg-white"
          >
            <option>All Actions</option>
            <option>CREATE</option>
            <option>APPROVE</option>
            <option>REJECT</option>
            <option>UPDATE</option>
            <option>DELETE</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22] bg-white"
          >
            <option>All Categories</option>
            <option>Budget</option>
            <option>User Management</option>
            <option>Documents</option>
            <option>Expenses</option>
          </select>

          {/* Export Button */}
          <button
            onClick={handleExport}
            className="bg-[#228B22] text-white px-4 py-2 rounded-lg hover:bg-[#1a6b1a] transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-gray-700">Timestamp</th>
                <th className="text-left py-4 px-6 text-gray-700">Action</th>
                <th className="text-left py-4 px-6 text-gray-700">Category</th>
                <th className="text-left py-4 px-6 text-gray-700">User</th>
                <th className="text-left py-4 px-6 text-gray-700">Description</th>
                <th className="text-right py-4 px-6 text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-700">{log.timestamp}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm ${getActionColor(log.action)}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700">{log.category}</td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-gray-800">{log.user}</div>
                      <div className="text-sm text-gray-500">{log.role}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">{log.description}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors mx-auto">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
