import React from 'react'

const jobs = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "New York, NY",
    description:
      "Develop and maintain software applications, collaborate with cross-functional teams, and write clean, scalable code.",
    link: "#",
  },
  {
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "San Francisco, CA",
    description:
      "Lead product strategy and roadmaps, work with engineering and design teams, and ensure successful product launches.",
    link: "#",
  },
  {
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Remote",
    description:
      "Design beautiful and user-friendly interfaces, collaborate with product teams, and conduct user research.",
    link: "#",
  },
];

const JobsPage = () => {
  return (

    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Job Listings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-1">{job.company}</p>
              <p className="text-gray-500 mb-4">{job.location}</p>
              <p className="text-gray-700 mb-4">{job.description}</p>
              <a
                href={job.link}
                className="inline-block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
