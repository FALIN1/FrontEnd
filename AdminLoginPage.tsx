import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/765f41314c3d8d3cb808707394e26a39bac38f78.png';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('Barangay Captain');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admin login attempt:', { role, username, password });
    // Handle admin login logic here
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-md">
      {/* Back to Resident Login */}
      <Link
        to="/"
        className="flex items-center gap-2 text-[#228B22] mb-6 hover:underline"
      >
        <ArrowLeft size={20} />
        Back to Resident Login
      </Link>

      <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Barangay Pagawan Logo" className="w-24 h-24" />
        </div>

        {/* Title */}
        <h1 className="text-center text-[#228B22] mb-8">
          Barangay Pagawan Budget Allocation and Monitoring System
        </h1>

        {/* Heading */}
        <h2 className="text-center text-[#228B22] mb-8">
          Admin Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Admin Role */}
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 mb-2">
              Admin Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22] bg-white"
            >
              <option>Barangay Captain</option>
              <option>Barangay Secretary</option>
              <option>Barangay Treasurer</option>
            </select>
          </div>

          {/* Admin Username */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Admin Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your admin username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22]"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#228B22] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <Link to="/forgot-password" className="text-[#228B22] hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#228B22] text-white py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors"
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
}