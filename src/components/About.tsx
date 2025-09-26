import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate software engineer with <strong>X years</strong> of experience
              creating innovative solutions and building scalable applications. I love turning
              complex problems into simple, beautiful, and intuitive solutions.
            </p>

            <p>
              My journey in software development started with a curiosity about how things work
              under the hood. Over the years, I've developed expertise in full-stack development,
              with a strong focus on modern web technologies and best practices.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community. I believe
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Problem Solver</h4>
                <p>I enjoy breaking down complex challenges into manageable solutions</p>
              </div>

              <div className="highlight-item">
                <h4>Team Player</h4>
                <p>Collaborative approach with excellent communication skills</p>
              </div>

              <div className="highlight-item">
                <h4>Continuous Learner</h4>
                <p>Always exploring new technologies and best practices</p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <p>Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About