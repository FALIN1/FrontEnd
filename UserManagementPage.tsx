import { useState } from 'react';
import { Search, Eye, Check, X } from 'lucide-react';

interface Registration {
  id: number;
  name: string;
  email: string;
  phone: string;
  submitted: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

const registrationsData: Registration[] = [
  {
    id: 1,
    name: 'Maria Santos',
    email: 'maria.santos@example.com',
    phone: '0912 345 6789',
    submitted: '11/20/2024',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@example.com',
    phone: '0923 456 7890',
    submitted: '11/22/2024',
    status: 'Pending',
  },
];

export function UserManagementPage() {
  const [registrations, setRegistrations] = useState(registrationsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Approved' | 'Rejected'>('All');

  const totalRegistrations = registrations.length;
  const pendingCount = registrations.filter(r => r.status === 'Pending').length;
  const approvedCount = registrations.filter(r => r.status === 'Approved').length;
  const rejectedCount = registrations.filter(r => r.status === 'Rejected').length;

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = 
      reg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || reg.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id: number, newStatus: 'Approved' | 'Rejected') => {
    setRegistrations(registrations.map(reg =>
      reg.id === id ? { ...reg, status: newStatus } : reg
    ));
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-700 mb-1">User Management</h1>
        <p className="text-gray-600">Review and manage resident registration requests</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-5 border-l-4 border-gray-400">
          <h3 className="text-gray-600 mb-2">Total Registrations</h3>
          <p className="text-3xl text-gray-900">{totalRegistrations}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border-l-4 border-yellow-500">
          <h3 className="text-gray-600 mb-2">Pending</h3>
          <p className="text-3xl text-gray-900">{pendingCount}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
          <h3 className="text-gray-600 mb-2">Approved</h3>
          <p className="text-3xl text-gray-900">{approvedCount}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border-l-4 border-red-500">
          <h3 className="text-gray-600 mb-2">Rejected</h3>
          <p className="text-3xl text-gray-900">{rejectedCount}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22]"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setStatusFilter('All')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                statusFilter === 'All'
                  ? 'bg-[#228B22] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter('Pending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                statusFilter === 'Pending'
                  ? 'bg-[#228B22] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setStatusFilter('Approved')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                statusFilter === 'Approved'
                  ? 'bg-[#228B22] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Approved
            </button>
            <button
              onClick={() => setStatusFilter('Rejected')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                statusFilter === 'Rejected'
                  ? 'bg-[#228B22] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rejected
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-gray-700">Name</th>
                <th className="text-left py-4 px-6 text-gray-700">Email</th>
                <th className="text-left py-4 px-6 text-gray-700">Phone</th>
                <th className="text-left py-4 px-6 text-gray-700">Submitted</th>
                <th className="text-left py-4 px-6 text-gray-700">Status</th>
                <th className="text-right py-4 px-6 text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map((registration) => (
                <tr key={registration.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800">{registration.name}</td>
                  <td className="py-4 px-6 text-gray-700">{registration.email}</td>
                  <td className="py-4 px-6 text-gray-700">{registration.phone}</td>
                  <td className="py-4 px-6 text-gray-700">{registration.submitted}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        registration.status === 'Approved'
                          ? 'bg-green-100 text-green-700'
                          : registration.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {registration.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      {registration.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => handleStatusChange(registration.id, 'Approved')}
                            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                            title="Approve"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => handleStatusChange(registration.id, 'Rejected')}
                            className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                            title="Reject"
                          >
                            <X size={16} />
                          </button>
                        </>
                      )}
                    </div>
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
