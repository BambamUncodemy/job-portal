import react from 'react';

function JobCard ({job}){
    const jobTitle = job.job_title || job.title || 'Untitle';
    const company = job.job_company_name || job.company || 'Unknow'
    const logo = job.company_logo || 'Not Available'

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
