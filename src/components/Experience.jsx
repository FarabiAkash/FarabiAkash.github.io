import { experience } from '../data/experience';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="relative">
              {/* Vertical line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200" />
              )}
              
              <div className="relative flex items-start space-x-6">
                <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-indigo-600" />
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.position} at {job.company}
                    </h3>
                    
                    <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {job.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                    </div>
                    
                    <ul className="mt-4 space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="h-6 flex items-center sm:h-7">
                            <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <p className="ml-2 text-gray-600">{responsibility}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;