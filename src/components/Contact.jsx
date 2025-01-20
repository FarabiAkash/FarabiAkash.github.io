import { publications } from '../data/publications';
import { BookOpen, ExternalLink } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Research Publications
        </h2>
        
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {publication.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {publication.year}
                    </span>
                  </div>
                  
                  <div className="mt-2">
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                      View Publication
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
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

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Contact Me
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                rows="4"
                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;