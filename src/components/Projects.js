import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useTileSystem } from '../hooks/useTileSystem';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import dockerProject1Image from '../assets/docker-project-1.jpg';
import dockerProject2Image from '../assets/docker-project-2.jpg';
import k8sProject1Image from '../assets/k8s-project-1.jpeg';
import excelDashboardImage from '../assets/Excel-Dashboard-superstore.jpg';
import biDashboardImage from '../assets/BI Dashboard.jpeg';
import awsVpcImage from '../assets/aws-vpc-2tier-arch.jpg';
import cicdActionsImage from '../assets/CICD WITH ACTIONS.png';

const Projects = () => {
  const [activeSubSection, setActiveSubSection] = useState(() => {
    return localStorage.getItem('activeSubSection') || 'devops';
  });

  // Add tile system
  useTileSystem();

  const renderDevOpsContent = () => {
    return (
      <>
      
      {/* CI/CD & GitHub Actions */}
      <div className="tech-category">
        <h3 className="tech-title">CI/CD & GitHub Actions</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={cicdActionsImage} alt="CI/CD with GitHub Actions" className="project-image" />
              <div className="project-title-overlay">
                <h3>Automated Deployment Pipeline with GitHub Actions</h3>
                <p>Complete CI/CD pipeline using GitHub Actions for automated testing, building, and deployment to AWS with Docker containerization and security scanning</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">GitHub Actions</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Terraform with Backend</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">YAML</span>
                <span className="skill-tag">Deployment Automation</span>
                <span className="skill-tag">Auto SSH</span>
              </div>
              <a href="https://github.com/Mosrichard/Reactapp-Deployment-Using-Actions" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Terraform */}
      <div className="tech-category">
        <h3 className="tech-title">Terraform</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>AWS Infrastructure as Code with Terraform</h3>
                <p>Automated AWS infrastructure provisioning using Terraform modules for VPC, EC2, RDS, and S3 with state management and CI/CD integration</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Terraform</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">VPC</span>
                <span className="skill-tag">EC2</span>
                <span className="skill-tag">RDS</span>
                <span className="skill-tag">S3</span>
                <span className="skill-tag">IAM</span>
                <span className="skill-tag">HCL</span>
              </div>
              <a href="https://github.com/Mosrichard/terraform-aws-infrastructure" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>Multi-Environment Terraform Deployment</h3>
                <p>Scalable multi-environment infrastructure deployment using Terraform workspaces with automated state management and environment-specific configurations</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Terraform</span>
                <span className="skill-tag">Workspaces</span>
                <span className="skill-tag">State Management</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Modules</span>
                <span className="skill-tag">Variables</span>
                <span className="skill-tag">Remote Backend</span>
              </div>
              <a href="https://github.com/Mosrichard/terraform-multi-env" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* AWS */}
      <div className="tech-category">
        <h3 className="tech-title">AWS</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={awsVpcImage} alt="AWS VPC 2-Tier Architecture" className="project-image" />
              <div className="project-title-overlay">
                <h3>Production-Grade 2-Tier Architecture on AWS</h3>
<p>Highly available and scalable 2-Tier AWS architecture with public ALB, private application servers, multi-AZ deployment, and secure VPC networking. Achieved 99.9% uptime and reduced infrastructure costs by 30%.</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">NAT Gateway</span>
                <span className="skill-tag">Application Load Balancer</span>
                <span className="skill-tag">VPC</span>
                <span className="skill-tag">Auto Scaling Groups</span>
                <span className="skill-tag">EC2</span>
                <span className="skill-tag">Security Groups</span>
                <span className="skill-tag">Internet Gateway</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JS</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">SSH</span>
              </div>
              <a href="https://github.com/Mosrichard/production-grade-2tier-aws-architecture" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Linux */}
      <div className="tech-category">
        <h3 className="tech-title">Linux</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>File Manager with Cron</h3>
                <p>Automated file management system with scheduled tasks using CRON for efficient file operations</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Crontab</span>
              </div>
              <a href="https://github.com/Mosrichard/adhoc-dep-semiauto" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ansible */}
      <div className="tech-category">
        <h3 className="tech-title">Ansible</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={project2Image} alt="Deployment Automation" className="project-image" />
              <div className="project-title-overlay">
                <h3>Deployment Automation using Adhoc Cmds</h3>
                <p>Used Ansible ad-hoc commands to deploy a static web application on multiple AWS EC2 instances with NGINX server.</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Ansible</span>
                <span className="skill-tag">Adhoc</span>
                <span className="skill-tag">Nginx</span>
                <span className="skill-tag">AWS (EC2)</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">SSH</span>
              </div>
              <a href="https://github.com/Mosrichard/ansible-adhoc-deployment-semiautomation" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={project3Image} alt="Automated Static App Deployment" className="project-image" />
              <div className="project-title-overlay">
                <h3>Automated Static App Deployment with Ansible</h3>
                <p>Used Ansible playbook to automate the deployment of a static web application on a target node with NGINX server.</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Ansible</span>
                <span className="skill-tag">Adhoc-cmds</span>
                <span className="skill-tag">Ans-playbook</span>
                <span className="skill-tag">YAML</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Nginx</span>
                <span className="skill-tag">AWS (EC2)</span>
                <span className="skill-tag">SSH</span>
              </div>
              <a href="https://github.com/Mosrichard/Deployment-automation-using-ansible-playbook" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>Fullstack App Deployment Automation using Ansible Roles</h3>
                <p>Automated deployment of a complete fullstack application using structured Ansible roles for scalable infrastructure management</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Ansible</span>
                <span className="skill-tag">Ansible Roles</span>
                <span className="skill-tag">YAML</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Nginx</span>
                <span className="skill-tag">AWS (EC2)</span>
                <span className="skill-tag">SSH</span>
              </div>
              <a href="https://github.com/Mosrichard/fullstack-dep-automation-ansible-roles" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Docker */}
      <div className="tech-category">
        <h3 className="tech-title">Docker</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={dockerProject1Image} alt="Dockerized Portfolio Image" className="project-image" />
              <div className="project-title-overlay">
                <h3>dockerized-portfolio-image</h3>
                <p>Dockerized a full-stack web application with multi-stage builds and optimized container images for production deployment</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker & Containers</span>
                <span className="skill-tag">Dockerfile & Multi-stage Builds</span>
                <span className="skill-tag">NGINX</span>
              </div>
              <a href="https://github.com/Mosrichard/dockerized-portfolio-image" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={dockerProject2Image} alt="MOS Portfolio - Dockerized" className="project-image" />
              <div className="project-title-overlay">
                <h3>MOS Portfolio - Dockerized</h3>
                <p>Implemented Docker Swarm for container orchestration with load balancing and service discovery across multiple nodes</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker & Containers</span>
                <span className="skill-tag">Dockerfile & Multi-stage Builds</span>
                <span className="skill-tag">NGINX</span>
                <span className="skill-tag">EC2</span>
                <span className="skill-tag">Docker Hub</span>
              </div>
              <a href="https://github.com/Mosrichard/MOS-PORTFOLIO" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>CI/CD Pipeline with Docker</h3>
                <p>Built automated CI/CD pipeline using Docker containers for testing, building, and deploying applications with Jenkins integration</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Automation</span>
              </div>
              <a href="https://github.com/Mosrichard/docker-cicd-pipeline" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>Microservices Architecture with Docker</h3>
                <p>Designed and deployed microservices architecture using Docker containers with API gateway and service mesh implementation</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">API Gateway</span>
                <span className="skill-tag">Service Mesh</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">AWS</span>
              </div>
              <a href="https://github.com/Mosrichard/docker-microservices" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Kubernetes */}
      <div className="tech-category kubernetes-category">
        <h3 className="tech-title">Kubernetes</h3>
        <div className="projects-grid">
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <img src={k8sProject1Image} alt="K8s React Deployment" className="project-image" />
              <div className="project-title-overlay">
                <h3>K8s "React Deployment"</h3>
                <p>Built and deployed a React app containerized with Nginx on a Minikube Kubernetes cluster using Deployment and Service manifests.</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Minikube</span>
                <span className="skill-tag">Nginx</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">YAML</span>
                <span className="skill-tag">Docker Hub</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">kubectl</span>
              </div>
              <a href="https://github.com/Mosrichard/react-tesla-k8s-deployment" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>Microservices on Kubernetes</h3>
                <p>Deployed scalable microservices architecture using Kubernetes with service discovery and load balancing</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">Ingress</span>
                <span className="skill-tag">ConfigMaps</span>
                <span className="skill-tag">Secrets</span>
              </div>
              <a href="https://github.com/Mosrichard/k8s-microservices" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
          <div className="project-card project-card-with-image">
            <div className="project-image-section">
              <div className="project-title-overlay">
                <h3>Kubernetes CI/CD Pipeline</h3>
                <p>Implemented automated CI/CD pipeline with Kubernetes deployments using GitOps principles and ArgoCD</p>
              </div>
            </div>
            <div className="project-content-section">
              <div className="project-skills">
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">ArgoCD</span>
                <span className="skill-tag">GitOps</span>
                <span className="skill-tag">Helm</span>
                <span className="skill-tag">Jenkins</span>
              </div>
              <a href="https://github.com/Mosrichard/k8s-cicd-gitops" target="_blank" rel="noopener noreferrer" className="github-btn">
                🐙 View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };



  const renderDataAnalysisContent = () => {
    return (
      <>
        {/* Business Intelligence */}
        <div className="tech-category">
          <h3 className="tech-title">Business Intelligence Dashboards</h3>
          <div className="projects-grid">
            <div className="project-card project-card-with-image">
              <div className="project-image-section">
                <img src={excelDashboardImage} alt="Excel Dashboard Superstore" className="project-image" />
                <div className="project-title-overlay">
                  <h3>Superstore Sales Dashboard</h3>
                  <p>Interactive Excel dashboard analyzing sales performance and KPIs</p>
                </div>
              </div>
              <div className="project-content-section">
                <div className="project-skills">
                  <span className="skill-tag">Excel</span>
                  <span className="skill-tag">Pivot Tables</span>
                  <span className="skill-tag">Data Visualization</span>
                  <span className="skill-tag">KPI Analysis</span>
                </div>
                <a href="https://github.com/Mosrichard/excel-superstore-dashboard" target="_blank" rel="noopener noreferrer" className="github-btn">
                  🐙 View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Python Data Analysis */}
        <div className="tech-category">
          <h3 className="tech-title">Python Data Analysis</h3>
          <div className="projects-grid">
            <div className="project-card project-card-with-image">
              <div className="project-image-section">
                <div className="project-title-overlay">
                  <h3>Air-BNB Data Cleaning</h3>
  <p>Comprehensive data cleaning and preprocessing of Airbnb dataset using Python and pandas. Improved data quality by 85% and reduced analysis time by 50%.</p>
                </div>
              </div>
              <div className="project-content-section">
                <div className="project-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Pandas</span>
                  <span className="skill-tag">Jupyter Notebook</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                </div>
                <a href="https://github.com/Mosrichard/AIR-BNB_dataset_cleaning" target="_blank" rel="noopener noreferrer" className="github-btn">
                  🐙 View on GitHub
                </a>
              </div>
            </div>
            <div className="project-card project-card-with-image">
              <div className="project-image-section">
                <img src={biDashboardImage} alt="Customer Shopping Behaviour Analysis" className="project-image" />
                <div className="project-title-overlay">
                  <h3>Customer Shopping Behaviour Analysis</h3>
  <p>Comprehensive analysis of customer shopping patterns using Python and Power BI dashboard. Identified key trends leading to 25% increase in customer retention.</p>
                </div>
              </div>
              <div className="project-content-section">
                <div className="project-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Pandas</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Jupyter Notebook</span>
                </div>
                <a href="https://github.com/Mosrichard/Customer_Shopping_Behavior" target="_blank" rel="noopener noreferrer" className="github-btn">
                  🐙 View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // Save active sub-section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeSubSection', activeSubSection);
    
    // Animate project cards when section changes
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 30, scale: 0.95 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power3.out'
      }
    );
  }, [activeSubSection]);

  const renderSubSection = () => {
    switch(activeSubSection) {
      case 'devops': return renderDevOpsContent();
      case 'data-analysis': return renderDataAnalysisContent();
      default: return renderDevOpsContent();
    }
  };

  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      
      {/* Sub-navigation */}
      <nav className="sub-navbar">
        <div className="nav-links">
          <a href="#devops" className={activeSubSection === 'devops' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSubSection('devops'); }}>DevOps</a>
          <a href="#data-analysis" className={activeSubSection === 'data-analysis' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setActiveSubSection('data-analysis'); }}>Data Analysis</a>
        </div>
      </nav>

      {renderSubSection()}
    </div>
  );
};

export default Projects;