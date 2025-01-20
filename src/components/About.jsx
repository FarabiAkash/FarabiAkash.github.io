import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Back-end Developer and Data Scientist with expertise in AI/ML technologies
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
            <Briefcase className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Experience</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Data Scientist and Software Engineer with focus on AI/ML solutions
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
            <GraduationCap className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Education</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Masters in Applied Statistics and Data Science with CSE background
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
            <MapPin className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Location</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              Based in Dhaka, Bangladesh. Available for remote work worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;