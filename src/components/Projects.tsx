import React, { useState } from 'react'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  category: string
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI and secure payments',
      longDescription: 'Built a comprehensive e-commerce platform using React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. Implemented responsive design and optimized for performance.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: '/project1.jpg',
      liveUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      longDescription: 'Developed a team collaboration tool similar to Trello with drag-and-drop functionality, real-time updates using WebSocket, user roles and permissions, file attachments, and email notifications. Used React with TypeScript for the frontend and Express.js with MongoDB for the backend.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express.js'],
      image: '/project2.jpg',
      liveUrl: 'https://task-manager-demo.com',
      githubUrl: 'https://github.com/yourusername/task-manager',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts',
      longDescription: 'Created a weather application that provides current weather conditions and 5-day forecasts. Features location search, geolocation support, weather maps, and historical data. Integrated with OpenWeatherMap API and implemented PWA features for offline functionality.',
      technologies: ['React', 'PWA', 'API Integration', 'Chart.js'],
      image: '/project3.jpg',
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/yourusername/weather-app',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'A scalable REST API with authentication and real-time features',
      longDescription: 'Built a robust REST API service using Node.js and Express.js. Implemented JWT authentication, role-based access control, rate limiting, data validation, comprehensive error handling, and API documentation with Swagger. Deployed using Docker and AWS ECS.',
      technologies: ['Node.js', 'Express.js', 'JWT', 'Docker', 'AWS'],
      image: '/project4.jpg',
      githubUrl: 'https://github.com/yourusername/api-service',
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics',
      longDescription: 'Developed an analytics dashboard for business intelligence with interactive charts, data filtering, export functionality, and real-time data updates. Used D3.js for custom visualizations and implemented server-side data processing with Python and pandas.',
      technologies: ['React', 'D3.js', 'Python', 'pandas', 'PostgreSQL'],
      image: '/project5.jpg',
      liveUrl: 'https://analytics-dashboard-demo.com',
      githubUrl: 'https://github.com/yourusername/analytics-dashboard',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Mobile App Backend',
      description: 'Backend services for a mobile application with push notifications',
      longDescription: 'Created backend infrastructure for a mobile application including user management, push notifications, file upload handling, data synchronization, and offline support. Implemented using Node.js, MongoDB, and Firebase for push notifications.',
      technologies: ['Node.js', 'MongoDB', 'Firebase', 'Redis', 'Docker'],
      image: '/project6.jpg',
      githubUrl: 'https://github.com/yourusername/mobile-backend',
      category: 'Backend'
    }
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-intro">
          <p>
            Here are some of the projects I've worked on. Each project showcases
            different skills and technologies, from frontend user interfaces to
            backend services and full-stack applications.
          </p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <svg width="80" height="80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,6V4H5V21H19V8H14M12,12V19H7V12H12M17,12V19H13V12H17Z" />
                  </svg>
                </div>
                <div className="project-overlay">
                  <button
                    className="btn btn-primary"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>

            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <span className="project-category">{selectedProject.category}</span>
            </div>

            <div className="modal-body">
              <p>{selectedProject.longDescription}</p>

              <div className="modal-tech">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects