import react from 'react';
function JobCard ({job}){
     const jobTitle = job.job_title || job.title || 'Untitled';
  const company = job.employer_name || job.company?.display_name || 'Unknown';
  const logo = job.employer_logo || job.company?.logo || 'https://via.placeholder.com/60';
    return(
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
      <div className="flex items-start gap-4">
        <img src={logo} alt={company} className="w-14 h-14 object-contain rounded-lg border border-gray-200" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{jobTitle}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
);
}
export default JobCard;
