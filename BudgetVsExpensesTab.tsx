import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Health', Allocated: 500000, Spent: 430000 },
  { name: 'Education', Allocated: 800000, Spent: 650000 },
  { name: 'Infrastructure', Allocated: 1200000, Spent: 980000 },
  { name: 'Social Services', Allocated: 600000, Spent: 450000 },
  { name: 'Agriculture', Allocated: 400000, Spent: 320000 },
];

const departments = [
  { name: 'Health', allocated: 500000, spent: 430000 },
  { name: 'Education', allocated: 800000, spent: 650000 },
  { name: 'Infrastructure', allocated: 1200000, spent: 980000 },
  { name: 'Social Services', allocated: 600000, spent: 450000 },
  { name: 'Agriculture', allocated: 400000, spent: 320000 },
];

export function BudgetVsExpensesTab() {
  return (
    <div>
      {/* Chart Section */}
      <div className="bg-white rounded-2xl p-6 mb-6">
        <h2 className="text-gray-800 mb-1">Budget Allocation vs Expenses</h2>
        <p className="text-gray-600 mb-6">Comparison by department</p>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Allocated" fill="#4169E1" />
            <Bar dataKey="Spent" fill="#228B22" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <div key={dept.name} className="bg-white rounded-xl p-4">
            <h3 className="text-gray-800 mb-3">{dept.name}</h3>
            <div className="space-y-1">
              <p className="text-blue-600">
                Allocated: {dept.allocated.toLocaleString()}
              </p>
              <p className="text-[#228B22]">
                Spent: {dept.spent.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
