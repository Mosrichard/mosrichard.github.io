import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useTileSystem } from '../hooks/useTileSystem';

const Home = () => {
  useTileSystem();

  useEffect(() => {

    const tl = gsap.timeline();
    
    // Hero section animations
    tl.fromTo('.name', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.title', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.5'
    )
    .fromTo('.subtitle', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 
      '-=0.3'
    )
    .fromTo('.journey-compact', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, 
      '-=0.2'
    )
    .fromTo('.github-btn', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 
      '-=0.1'
    );

    // Resume sections stagger animation
    gsap.fromTo('.resume-section', 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2, 
        ease: 'power3.out',
        delay: 0.5
      }
    );

    // Skill tags animation
    gsap.fromTo('.skill-tag', 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.4, 
        stagger: 0.05, 
        ease: 'back.out(1.7)',
        delay: 1
      }
    );

    // Cleanup
    return () => {
      // Cleanup handled by useTileSystem hook
    };
  }, []);
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="name">Mos Richard</h1>
        <h2 className="title">Data & Cloud Enthusiast | DevOps in Progress</h2>
        <p className="subtitle">Automating infrastructure and deployments</p>
        
        <div className="journey-compact">
          <div className="journey-step">
            <span className="step-icon">🚀</span>
            <span>Started learning DevOps</span>
          </div>
          <div className="arrow">→</div>
          <div className="journey-step active">
            <span className="step-icon">📊</span>
            <span>Landed as DA</span>
          </div>
          <div className="arrow">→</div>
          <div className="journey-step">
            <span className="step-icon">⚡</span>
            <span>Moving to DevOps roles</span>
          </div>
        </div>
        
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <a href="/Mos-Resume-DevOps.pdf" download="Mos-Resume-DevOps.pdf" className="github-btn" style={{fontSize: '1rem', padding: '0.8rem 2rem'}} onClick={(e) => {
            e.target.innerHTML = '🚀 Download Started';
            setTimeout(() => {
              e.target.innerHTML = '📄 Download Resume';
            }, 2000);
          }}>
            📄 Download Resume
          </a>
        </div>
      </div>

      <div className="resume-sections">
        <div className="resume-section">
          <h3>About</h3>
          <p>DevOps Engineer with hands-on experience in cloud infrastructure, containerization, and automation. Proven track record of reducing deployment times by 60% and improving system reliability through Infrastructure as Code and CI/CD pipelines.</p>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <div style={{fontSize: '0.9rem', lineHeight: '1.4'}}>
            <div style={{marginBottom: '1rem'}}>
              <strong style={{color: 'white'}}>Data Analyst</strong><br/>
              <span style={{color: 'rgba(255,255,255,0.8)'}}>Current Role | Jan 2024 - Oct 2025</span><br/>
              <span style={{color: 'rgba(255,255,255,0.7)'}}>• Automated data pipelines reducing processing time by 40%</span><br/>
              <span style={{color: 'rgba(255,255,255,0.7)'}}>• Built interactive dashboards for business insights</span>
            </div>
            <div>
              <strong style={{color: 'white'}}>DevOps Projects</strong><br/>
              <span style={{color: 'rgba(255,255,255,0.8)'}}>Personal | 2025 - Present</span><br/>
              <span style={{color: 'rgba(255,255,255,0.7)'}}>• Deployed production-grade AWS architectures</span><br/>
              <span style={{color: 'rgba(255,255,255,0.7)'}}>• Containerized applications with 99.9% uptime</span>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills-compact">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Pandas</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Ansible</span>
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Kubernetes</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Nginx</span>
            <span className="skill-tag">HTTPD</span>
            <span className="skill-tag">Jenkins</span>
            <span className="skill-tag">GitHub Actions</span>
            <span className="skill-tag">Grafana</span>
            <span className="skill-tag">Excel</span>
            <span className="skill-tag">Power BI</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Terraform</span>
          </div>

        </div>

        <div className="resume-section">
          <h3>Contact</h3>
          <div className="contact-compact">
            <a href="mailto:mosrichard3@gmail.com" className="contact-info">📧 mosrichard3@gmail.com</a>
            <a href="https://www.linkedin.com/in/mos-richard-1316231a6/" target="_blank" rel="noopener noreferrer" className="contact-info">💼 LinkedIn</a>
            <a href="https://github.com/Mosrichard" target="_blank" rel="noopener noreferrer" className="contact-info">🐙 GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;