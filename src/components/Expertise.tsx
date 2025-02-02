import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "Django",
    "SQL",
    "PostgreSQL",
    "Postman",
    "git",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "kubernetes",
    "Jenkins",
    "AWS",
    "Azure",
    "Linux",
    "Selenium",
    "Beautiful Soup",
];

const labelsThird = [
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "PyTorch",
    "OpenCV",
    "PyTesseract",
    "Pandas",
    "NumPy",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Experienced in Full Stack Development, with expertise in building and maintaining scalable web applications. Skilled in front-end and back-end development, database management, and integrating APIs to create seamless user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Experienced in DevOps and Automation, with expertise in CI/CD pipelines, containerization, and cloud deployments. Skilled in automating workflows, managing infrastructure, and optimizing development processes to improve efficiency and scalability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ML & AI</h3>
                    <p>Experienced in Machine Learning and AI, specializing in building classification models, implementing OCR-based automation, and applying clustering algorithms to optimize data processing. Skilled in leveraging Python and various ML frameworks to develop efficient and scalable solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;