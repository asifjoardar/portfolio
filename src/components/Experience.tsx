import React from 'react'
import './Experience.css'

interface ExperienceItem {
  id: number
  position: string
  company: string
  location: string
  duration: string
  description: string[]
  technologies: string[]
  type: 'work' | 'education'
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: [
        'Led a team of 5 developers in building scalable web applications using React and Node.js',
        'Architected and implemented microservices architecture reducing system response time by 40%',
        'Mentored junior developers and conducted code reviews to maintain high code quality standards',
        'Collaborated with product managers and designers to deliver user-centric solutions'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'TypeScript'],
      type: 'work'
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Innovations Co.',
      location: 'New York, NY',
      duration: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing web applications using React and Express.js',
        'Implemented responsive designs and optimized applications for mobile and desktop platforms',
        'Integrated third-party APIs and payment gateways to enhance application functionality',
        'Participated in agile development processes and sprint planning meetings'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS', 'Git'],
      type: 'work'
    },
    {
      id: 3,
      position: 'Frontend Developer',
      company: 'StartupHub',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      description: [
        'Built modern, responsive user interfaces using React and Vue.js frameworks',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Optimized application performance and implemented SEO best practices',
        'Worked in a fast-paced startup environment with rapid iteration cycles'
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'Webpack', 'JavaScript', 'Bootstrap'],
      type: 'work'
    },
    {
      id: 4,
      position: 'Bachelor of Computer Science',
      company: 'State University',
      location: 'Texas, USA',
      duration: '2015 - 2019',
      description: [
        'Graduated Magna Cum Laude with a focus on Software Engineering and Web Development',
        'Completed coursework in Data Structures, Algorithms, Database Systems, and Software Architecture',
        'Participated in hackathons and coding competitions, winning 2nd place in the Annual Coding Challenge',
        'Led the Computer Science Student Association as Vice President for two years'
      ],
      technologies: ['Java', 'Python', 'C++', 'SQL', 'Data Structures', 'Algorithms'],
      type: 'education'
    }
  ]

  const workExperiences = experiences.filter(exp => exp.type === 'work')
  const education = experiences.filter(exp => exp.type === 'education')

  const ExperienceCard: React.FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => (
    <div className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="experience-content">
        <div className="experience-header">
          <h3 className="position">{experience.position}</h3>
          <h4 className="company">{experience.company}</h4>
          <div className="experience-meta">
            <span className="location">{experience.location}</span>
            <span className="duration">{experience.duration}</span>
          </div>
        </div>

        <div className="experience-description">
          <ul>
            {experience.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience-tech">
          {experience.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="timeline-dot"></div>
    </div>
  )

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="experience-intro">
          <p>
            My professional journey has been shaped by diverse experiences across different
            companies and projects. Here's a timeline of my career growth and educational background.
          </p>
        </div>

        <div className="experience-section">
          <h3 className="subsection-title">Professional Experience</h3>
          <div className="timeline">
            <div className="timeline-line"></div>
            {workExperiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h3 className="subsection-title">Education</h3>
          <div className="timeline">
            <div className="timeline-line"></div>
            {education.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={0} />
            ))}
          </div>
        </div>

        <div className="experience-summary">
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience