import { useState } from 'react';
import { Plus } from 'lucide-react';

interface BudgetItem {
  id: number;
  title: string;
  amount: number;
  programCode: string;
  notes: string;
  created: string;
  status: 'Approved' | 'Rejected' | 'Pending';
}

const budgetData: BudgetItem[] = [
  {
    id: 1,
    title: 'Health Services',
    amount: 500000,
    programCode: 'HS-2024',
    notes: 'Annual health program budget',
    created: '11/2/2024',
    status: 'Approved',
  },
  {
    id: 2,
    title: 'Education Support',
    amount: 450000,
    programCode: 'EDU-2024',
    notes: 'School supplies and learning materials for local schools',
    created: '11/2/2024',
    status: 'Approved',
  },
  {
    id: 3,
    title: 'Sports Development',
    amount: 200000,
    programCode: 'SPT-2024',
    notes: 'Basketball court renovation - insufficient documentation',
    created: '11/3/2024',
    status: 'Rejected',
  },
  {
    id: 4,
    title: 'Infrastructure Development',
    amount: 900000,
    programCode: 'Infrastructure',
    notes: 'Road maintenance and improvement projects',
    created: '11/10/2024',
    status: 'Approved',
  },
  {
    id: 5,
    title: 'Social Services',
    amount: 300000,
    programCode: 'Social Services',
    notes: 'Community training and development programs',
    created: '11/10/2024',
    status: 'Approved',
  },
  {
    id: 6,
    title: 'Agriculture Programs',
    amount: 350000,
    programCode: 'Agriculture',
    notes: 'Farm support and agricultural development',
    created: '11/14/2024',
    status: 'Approved',
  },
];

export function BudgetAllocationPage() {
  const [budgets, setBudgets] = useState(budgetData);

  const handleStatusChange = (id: number, newStatus: string) => {
    setBudgets(budgets.map(b => 
      b.id === id ? { ...b, status: newStatus as BudgetItem['status'] } : b
    ));
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-700 mb-1">Budget Allocation</h1>
        <p className="text-gray-600">Manage and allocate budgets across departments</p>
      </div>

      {/* Create Button */}
      <button className="flex items-center gap-2 bg-[#228B22] text-white px-4 py-2 rounded-lg hover:bg-[#1a6b1a] transition-colors mb-6">
        <Plus size={20} />
        Create Budget Allocation
      </button>

      {/* Budget Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgets.map((budget) => (
          <div key={budget.id} className="bg-white rounded-xl p-5 shadow-sm">
            {/* Title and Status Badge */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-gray-800">{budget.title}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  budget.status === 'Approved'
                    ? 'bg-green-100 text-green-700'
                    : budget.status === 'Rejected'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {budget.status}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4 text-sm">
              <p className="text-gray-700">
                <span className="text-gray-600">Amount:</span> ₱{budget.amount.toLocaleString()}
              </p>
              <p className="text-gray-700">
                <span className="text-gray-600">Program Code:</span> {budget.programCode}
              </p>
              <p className="text-gray-700">
                <span className="text-gray-600">Notes:</span> {budget.notes}
              </p>
              <p className="text-gray-500 text-xs">
                Created: {budget.created}
              </p>
            </div>

            {/* Update Status Dropdown */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Update Status
              </label>
              <select
                value={budget.status}
                onChange={(e) => handleStatusChange(budget.id, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22] bg-white text-sm"
              >
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
