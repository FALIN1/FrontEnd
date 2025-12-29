import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  FileText,
  Users,
  FolderOpen,
  ClipboardCheck,
  Settings,
  LogOut,
} from 'lucide-react';
import logo from 'figma:asset/765f41314c3d8d3cb808707394e26a39bac38f78.png';

interface SidebarProps {
  activePage?: string;
}

export function Sidebar({ activePage = 'dashboard' }: SidebarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { id: 'budget', icon: Wallet, label: 'Budget Allocation', path: '/budget-allocation' },
    { id: 'expense', icon: TrendingUp, label: 'Expense Monitoring', path: '/expense-monitoring' },
    { id: 'reports', icon: FileText, label: 'Reports', path: '/reports' },
    { id: 'users', icon: Users, label: 'User Management', path: '/user-management' },
    { id: 'documents', icon: FolderOpen, label: 'Documents', path: '/documents' },
    { id: 'audit', icon: ClipboardCheck, label: 'Audit Trail', path: '/audit-trail' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-[#228B22] text-white flex flex-col">
      {/* Logo and Title */}
      <div className="p-6 flex items-center gap-3">
        <img src={logo} alt="Barangay Pagawan" className="w-10 h-10" />
        <div>
          <div className="text-sm">Barangay</div>
          <div className="text-sm">Pagawan</div>
        </div>
      </div>

      {/* Role Badge */}
      <div className="mx-4 mb-4">
        <div className="bg-[#1a6b1a] text-center py-2 rounded-lg">
          Barangay Captain
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return item.path.startsWith('#') ? (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg text-left ${
                isActive
                  ? 'bg-white text-[#228B22]'
                  : 'hover:bg-[#1a6b1a]'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          ) : (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-1 rounded-lg ${
                isActive
                  ? 'bg-white text-[#228B22]'
                  : 'hover:bg-[#1a6b1a]'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#1a6b1a] rounded-lg text-left"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}