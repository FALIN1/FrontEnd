import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { OverviewTab } from './OverviewTab';
import { BudgetVsExpensesTab } from './BudgetVsExpensesTab';
import { DistributionTab } from './DistributionTab';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'budget' | 'distribution'>('overview');

  return (
    <div className="flex min-h-screen bg-[#B8B4C8]">
      <Sidebar activePage="dashboard" />
      
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-gray-700 mb-1">Dashboard</h1>
          <p className="text-gray-600">Overview of budget allocation and expenses for FY 2025-2026</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-[#228B22] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('budget')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'budget'
                ? 'bg-[#228B22] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Budget vs Expenses
          </button>
          <button
            onClick={() => setActiveTab('distribution')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'distribution'
                ? 'bg-[#228B22] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Distribution
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'budget' && <BudgetVsExpensesTab />}
        {activeTab === 'distribution' && <DistributionTab />}
      </main>
    </div>
  );
}