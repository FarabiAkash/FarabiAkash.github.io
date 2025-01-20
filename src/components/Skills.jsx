import { skills } from '../data/skills';

const SkillCategory = ({ title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Programming Languages" items={skills.languages} />
          <SkillCategory title="Frameworks" items={skills.frameworks} />
          <SkillCategory title="AI & Machine Learning" items={skills.aiMl} />
          <SkillCategory title="Data Technologies" items={skills.data} />
          <SkillCategory title="Development Tools" items={skills.tools} />
          <SkillCategory title="DevOps & Infrastructure" items={skills.devops} />
        </div>
      </div>
    </section>
  );
};

export default Skills;