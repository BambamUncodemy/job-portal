import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';

function App() {
  const [searchParams, setSearchParams] = useState ({query: ' Software Developer', location: ''});
  const [job, setJob] = useState([]);
 useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/jobs', {
            params: {query: searchParams.query, location: searchParams.location}
        });
       
        setJob(response.data.data || []); 
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
   fetchJobs()
  }, [searchParams]);

  
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
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Search Results</h2>
          <p> {job.length} jobs found</p>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{job.map((job, index) =>(

  <JobCard key={index} job={job}/>
) )}
          </div>
       
</main>
    </>
  );
}
export default App;
