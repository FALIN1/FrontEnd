import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Health', value: 500000, percentage: 14 },
  { name: 'Education', value: 800000, percentage: 23 },
  { name: 'Infrastructure', value: 1200000, percentage: 34 },
  { name: 'Social Services', value: 600000, percentage: 17 },
  { name: 'Agriculture', value: 400000, percentage: 11 },
];

const COLORS = ['#8B5CF6', '#228B22', '#FF4500', '#FF0000', '#FF8C00'];

const departments = [
  { name: 'Health', amount: 500000, color: '#8B5CF6' },
  { name: 'Education', amount: 800000, color: '#228B22' },
  { name: 'Infrastructure', amount: 1200000, color: '#FF8C00' },
  { name: 'Social Services', amount: 600000, color: '#FF0000' },
  { name: 'Agriculture', amount: 400000, color: '#8B5CF6' },
];

export function DistributionTab() {
  return (
    <div>
      {/* Chart Section */}
      <div className="bg-white rounded-2xl p-6 mb-6">
        <h2 className="text-gray-800 mb-1">Budget Distribution</h2>
        <p className="text-gray-600 mb-6">By department</p>
        
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percentage }) => `${name} ${percentage}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => value.toLocaleString()} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="bg-white rounded-xl p-4"
            style={{ borderLeft: `4px solid ${dept.color}` }}
          >
            <h3 className="text-gray-600 mb-2">{dept.name}</h3>
            <p className="text-gray-900">{dept.amount.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
