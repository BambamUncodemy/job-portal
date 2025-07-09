import React, { useState } from 'react';

function SearchBar({ onSearch, setQuickSearch }) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (!query.trim()) {
      alert('Please enter a job title to search');
      return;
    }
    onSearch({ query, location });
  };

  const handleQuickSearch = (term) => {
    setQuery(term);
    if (term === 'Remote') {
      setLocation('');
      setQuickSearch('Remote');
    } else {
      onSearch({ query: term, location });
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <div className="w-full md:w-2/5">
          <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              id="query"
              type="text"
              placeholder="e.g. Software Developer, Data Scientist"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-map-marker-alt text-gray-400"></i>
            </div>
            <input
              id="location"
              type="text"
              placeholder="e.g. New York, Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="w-full md:w-1/5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
        >
          <i className="fas fa-search"></i> Search
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {['Software Developer', 'Data Analyst', 'Project Manager', 'UX Designer', 'Remote', 'Full-time', 'Part-time'].map((term) => (
          <button
            key={term}
            onClick={() => handleQuickSearch(term)}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition"
          >
            {term}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SearchBar;