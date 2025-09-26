import React from 'react'
import './Skills.css'

interface Skill {
  name: string
  level: number
  category: string
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Vue.js', level: 75, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Sass/SCSS', level: 80, category: 'Frontend' },

    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    { name: 'REST APIs', level: 90, category: 'Backend' },

    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'AWS', level: 65, category: 'Tools' },
    { name: 'Jest', level: 80, category: 'Tools' },
    { name: 'Webpack', level: 75, category: 'Tools' },
    { name: 'Figma', level: 70, category: 'Tools' },
  ]

  const categories = ['Frontend', 'Backend', 'Tools']

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category)
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-intro">
          <p>
            I work with a diverse range of technologies and tools to build
            modern, scalable, and efficient applications. Here's what I bring to the table:
          </p>
        </div>

        <div className="skills-categories">
          {categories.map((category) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-additional">
          <h3>Other Competencies</h3>
          <div className="competencies">
            <span className="competency">Agile/Scrum</span>
            <span className="competency">System Design</span>
            <span className="competency">Code Review</span>
            <span className="competency">Technical Writing</span>
            <span className="competency">Performance Optimization</span>
            <span className="competency">UI/UX Design</span>
            <span className="competency">DevOps</span>
            <span className="competency">Microservices</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills