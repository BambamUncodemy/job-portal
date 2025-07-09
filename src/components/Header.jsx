import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-3xl" role="img" aria-label="Briefcase">💼</span>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              JobFinder<span className="text-yellow-400">Pro</span>
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <button
              className="text-white hover:text-yellow-400 hover:bg-indigo-700 p-2 rounded-full transition-colors duration-200"
              aria-label="Notifications"
            >
              <span className="text-xl" role="img" aria-label="Bell">🔔</span>
            </button>
            <button
              className="text-white hover:text-yellow-400 hover:bg-indigo-700 p-2 rounded-full transition-colors duration-200"
              aria-label="User Profile"
            >
              <span className="text-xl" role="img" aria-label="User">👤</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;