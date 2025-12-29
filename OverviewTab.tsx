import { DollarSign, TrendingUp, Clock, Building2 } from 'lucide-react';

export function OverviewTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total Budget */}
      <div className="bg-[#FF9999] rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-800 mb-4">Total Budget</h3>
          <p className="text-2xl mb-1">3,500,000</p>
          <p className="text-gray-700">Fiscal Year 2025-2026</p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center">
            <DollarSign className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Total Spent */}
      <div className="bg-[#FF9999] rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-800 mb-4">Total Spent</h3>
          <p className="text-2xl mb-1">2,820,000</p>
          <p className="text-gray-700">80.6% of total budget</p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center">
            <TrendingUp className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Remaining */}
      <div className="bg-[#FF9999] rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-800 mb-4">Remaining</h3>
          <p className="text-2xl mb-1">680,000</p>
          <p className="text-gray-700">19.4% available</p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center">
            <Clock className="text-white" size={24} />
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="bg-[#FF9999] rounded-3xl p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-gray-800 mb-4">Departments</h3>
          <p className="text-2xl mb-1">5</p>
          <p className="text-gray-700">Active departments</p>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 bg-[#228B22] rounded-full flex items-center justify-center">
            <Building2 className="text-white" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
