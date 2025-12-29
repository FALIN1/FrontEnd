import { AlertTriangle } from 'lucide-react';

interface ProgramUtilization {
  name: string;
  code: string;
  allocated: number;
  spent: number;
  remaining: number;
  percentage: number;
  warning?: string;
}

const programsData: ProgramUtilization[] = [
  {
    name: 'Health Services',
    code: 'HS-2024',
    allocated: 500000,
    spent: 295000,
    remaining: 205000,
    percentage: 59.0,
  },
  {
    name: 'Education Support',
    code: 'EDU-2024',
    allocated: 450000,
    spent: 388000,
    remaining: 62000,
    percentage: 86.2,
    warning: 'Approaching budget limit - only ₱62,000 remaining',
  },
  {
    name: 'Infrastructure Development',
    code: 'Infrastructure',
    allocated: 800000,
    spent: 125000,
    remaining: 675000,
    percentage: 15.6,
  },
  {
    name: 'Social Services',
    code: 'Social Services',
    allocated: 300000,
    spent: 87000,
    remaining: 213000,
    percentage: 29.0,
  },
  {
    name: 'Agriculture Programs',
    code: 'Agriculture',
    allocated: 250000,
    spent: 50000,
    remaining: 200000,
    percentage: 20.0,
  },
];

export function ExpenseMonitoringPage() {
  const totalAllocated = programsData.reduce((sum, p) => sum + p.allocated, 0);
  const totalSpent = programsData.reduce((sum, p) => sum + p.spent, 0);
  const totalRemaining = totalAllocated - totalSpent;
  const utilizationPercentage = ((totalSpent / totalAllocated) * 100).toFixed(1);

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-700 mb-1">Expense Monitoring</h1>
        <p className="text-gray-600">Track and monitor expenses across all departments</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg mb-6">
        <p className="text-sm">
          <span className="font-semibold">View Only:</span> Only Barangay Treasurer can input income and expenditures.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Budget Allocated */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <h3 className="text-blue-900 mb-2">Total Budget Allocated</h3>
          <p className="text-2xl text-blue-900 mb-1">₱{totalAllocated.toLocaleString()}</p>
          <p className="text-sm text-blue-700">From {programsData.length} approved budgets</p>
        </div>

        {/* Total Spent */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
          <h3 className="text-red-900 mb-2">Total Spent</h3>
          <p className="text-2xl text-red-900 mb-1">₱{totalSpent.toLocaleString()}</p>
          <p className="text-sm text-red-700">{utilizationPercentage}% utilized</p>
        </div>

        {/* Remaining Budget */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
          <h3 className="text-green-900 mb-2">Remaining Budget</h3>
          <p className="text-2xl text-green-900 mb-1">₱{totalRemaining.toLocaleString()}</p>
          <p className="text-sm text-green-700">{(100 - parseFloat(utilizationPercentage)).toFixed(1)}% available</p>
        </div>
      </div>

      {/* Budget Utilization Section */}
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-gray-800 mb-6">Budget Utilization by Program</h2>

        <div className="space-y-6">
          {programsData.map((program, index) => (
            <div
              key={index}
              className={`p-5 rounded-lg border-l-4 ${
                program.warning
                  ? 'bg-yellow-50 border-yellow-500'
                  : program.percentage > 70
                  ? 'bg-orange-50 border-orange-500'
                  : 'bg-green-50 border-green-500'
              }`}
            >
              {/* Program Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    {program.name}
                    {program.warning && <AlertTriangle size={18} className="text-yellow-600" />}
                  </h3>
                  <p className="text-sm text-gray-600">Code: {program.code}</p>
                </div>
                <span className={`text-lg ${
                  program.percentage > 80 ? 'text-orange-700' : 'text-green-700'
                }`}>
                  {program.percentage}%
                </span>
              </div>

              {/* Budget Details */}
              <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                <div>
                  <p className="text-gray-600">Allocated:</p>
                  <p className="text-gray-900">₱{program.allocated.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Spent:</p>
                  <p className="text-red-700">₱{program.spent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Remaining:</p>
                  <p className="text-green-700">₱{program.remaining.toLocaleString()}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    program.percentage > 80
                      ? 'bg-orange-500'
                      : 'bg-green-500'
                  }`}
                  style={{ width: `${program.percentage}%` }}
                />
              </div>

              {/* Warning Message */}
              {program.warning && (
                <div className="mt-3 flex items-start gap-2 text-sm text-yellow-800">
                  <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
                  <p>{program.warning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
