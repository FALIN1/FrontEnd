import { FileText, Download, CheckCircle } from 'lucide-react';

interface BudgetReport {
  title: string;
  date: string;
  status: 'Live';
}

const budgetReports: BudgetReport[] = [
  {
    title: 'Health Services - Budget Report',
    date: 'Dec 29, 2025',
    status: 'Live',
  },
  {
    title: 'Education Support - Budget Report',
    date: 'Dec 29, 2025',
    status: 'Live',
  },
  {
    title: 'Infrastructure Development - Budget Report',
    date: 'Dec 29, 2025',
    status: 'Live',
  },
  {
    title: 'Social Services - Budget Report',
    date: 'Dec 29, 2025',
    status: 'Live',
  },
  {
    title: 'Agriculture Programs - Budget Report',
    date: 'Dec 29, 2025',
    status: 'Live',
  },
];

export function ReportsPage() {
  const totalAllocated = 2300000;
  const totalExpenditure = 945000;
  const remainingBalance = totalAllocated - totalExpenditure;

  const handleViewDetails = (title: string) => {
    console.log('View details for:', title);
  };

  const handleDownload = (title: string) => {
    console.log('Download report:', title);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-gray-700 mb-1">Reports</h1>
        <p className="text-gray-600">Generate and download financial reports</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Allocated */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <h3 className="text-blue-900 mb-2">Total Allocated</h3>
          <p className="text-2xl text-blue-900 mb-1">₱{totalAllocated.toLocaleString()}</p>
          <p className="text-sm text-blue-700">Across 5 approved projects</p>
        </div>

        {/* Total Expenditure */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
          <h3 className="text-red-900 mb-2">Total Expenditure</h3>
          <p className="text-2xl text-red-900 mb-1">₱{totalExpenditure.toLocaleString()}</p>
          <p className="text-sm text-red-700">7 transactions</p>
        </div>

        {/* Remaining Balance */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
          <h3 className="text-green-900 mb-2">Remaining Balance</h3>
          <p className="text-2xl text-green-900 mb-1">₱{remainingBalance.toLocaleString()}</p>
          <p className="text-sm text-green-700">61.3% available</p>
        </div>
      </div>

      {/* Permissions Info */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
        <p className="text-blue-900 text-sm">
          <span className="font-semibold">Your Permissions:</span> You can publish budget reports (Submitted, Approved, Rejected)
        </p>
      </div>

      {/* Budget Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgetReports.map((report, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow-sm">
            {/* Icon and Status */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText className="text-[#228B22]" size={24} />
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {report.status}
              </span>
            </div>

            {/* Title and Date */}
            <h3 className="text-gray-800 mb-2">{report.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{report.date}</p>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => handleViewDetails(report.title)}
                className="w-full bg-[#2C5A2C] text-white py-2 rounded-lg hover:bg-[#1a4a1a] transition-colors flex items-center justify-center gap-2"
              >
                <FileText size={18} />
                View Budget Details
              </button>
              <button
                onClick={() => handleDownload(report.title)}
                className="w-full bg-[#228B22] text-white py-2 rounded-lg hover:bg-[#1a6b1a] transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download
              </button>
              <button className="w-full bg-[#32CD32] text-white py-2 rounded-lg hover:bg-[#2ab82a] transition-colors flex items-center justify-center gap-2">
                <CheckCircle size={18} />
                Published
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}