import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.jpg';
import mock04 from '../assets/images/mock04.jpg';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock99.avif';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/PythonGuna/Garbage-classification" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PythonGuna/Garbage-classification" target="_blank" rel="noreferrer"><h2>Garbage Classification</h2></a>
                <p>This project involves classifying garbage images into various categories such as 'paper', 'glass', 'metal', 'trash', 'cardboard', and 'plastic'. The model was trained using the TorchVision module, leveraging deep learning techniques for image classification.</p>
            </div>
            <div className="project">
                <a href="https://github.com/PythonGuna/Microservices_projects" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PythonGuna/Microservices_projects" target="_blank" rel="noreferrer"><h2>Micro Services Image Management</h2></a>
                <p>A microservices-based image management system built with Python, Docker, and RabbitMQ. It includes two services: an Admin App (Django with MySQL) for managing and publishing images, and a Main App (Flask with MySQL) for users to like images. RabbitMQ facilitates event-driven communication, while internal APIs ensure smooth interaction between the services.</p>
            </div>
            <div className="project">
                <a href="https://github.com/PythonGuna/Leaf_Disease_Prediction" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PythonGuna/Leaf_Disease_Prediction" target="_blank" rel="noreferrer"><h2>Leaf Disease Prediction</h2></a>
                <p>This project uses TensorFlow and Keras to classify leaf spots caused by diseases or environmental factors, achieving 97% accuracy. It automates early detection and diagnosis, helping prevent the spread of plant diseases in agriculture.</p>
            </div>
            <div className="project">
                <a href="https://github.com/PythonGuna/Sudoku-Image-Solver" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/PythonGuna/Sudoku-Image-Solver" target="_blank" rel="noreferrer"><h2>Sudoku Image Solver</h2></a>
                <p>Developed a complete solution for solving Sudoku puzzles using neural networks, TensorFlow, Keras, and image processing techniques.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;