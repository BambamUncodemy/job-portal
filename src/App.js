import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
function App() {
  const [searchParams, setSearchParams] = useState ({query: ' Software Developer', location: ''});
 const handleSearch = (params) => {
   setSearchParams(params);
   alert(`Searching for: ${params.query} in ${params.location}`);
 };

 const  setQuickSearch = (term) => {
  alert(`Quick search for: ${term}`);
 }
  return (
    <>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to JobFinderPro</h1>
          <SearchBar onSearch = {handleSearch} setQuickSearch={setQuickSearch}/>
</main>
    </>
  );
}

export default App;