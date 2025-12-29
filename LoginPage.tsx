import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import logo from 'figma:asset/765f41314c3d8d3cb808707394e26a39bac38f78.png';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // Handle login logic here
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 sm:p-12">
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
        Resident Login
      </h2>

      {/* Form */}
      <form onSubmit={handleLogin}>
        {/* Email/Barangay ID */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email/Barangay ID
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or ID"
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

        {/* Admin and Forgot Password Links */}
        <div className="flex justify-between mb-6">
          <Link to="/admin" className="text-[#228B22] hover:underline">
            Admin
          </Link>
          <Link to="/forgot-password" className="text-[#228B22] hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#228B22] text-white py-3 rounded-lg hover:bg-[#1a6b1a] transition-colors mb-6"
        >
          Login
        </button>
      </form>

      {/* Register Link */}
      <div className="text-center">
        <p className="text-gray-700 mb-3">Don't have an account?</p>
        <Link to="/register">
          <button className="w-full border-2 border-[#228B22] text-[#228B22] py-3 rounded-lg hover:bg-[#228B22] hover:text-white transition-colors">
            Register as Resident
          </button>
        </Link>
      </div>
    </div>
  );
}