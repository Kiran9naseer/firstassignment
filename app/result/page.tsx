import React from 'react'

const ResultPage = () => {

  // Sample data to display as results
  const results = [
    { id: 1, title: 'Result 1', description: 'This is the description for result 1.' },
    { id: 2, title: 'Result 2', description: 'This is the description for result 2.' },
    { id: 3, title: 'Result 3', description: 'This is the description for result 3.' },
  ];

  return (
    
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Search Results</h1>
        
        {/* Displaying results */}
        <div className="space-y-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-800">{result.title}</h2>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
