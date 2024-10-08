import './App.css';
import myPhoto from './assets/photo.jpeg'; 
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Pranjal Chaurasia</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="about">
        <div className="about-content">
          <img src={myPhoto} alt="Pranjal Chaurasia" className="profile-pic" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm Pranjal Chaurasia, a passionate developer with a keen interest in creating elegant solutions to complex problems. I specialize in building web applications using technologies such as React, Node.js, and Python.
              <br /><br />
              With a background in software engineering and a passion for coding, I aim to develop efficient and user-friendly applications. I'm always looking to enhance my skills and work on challenging projects that push the boundaries of innovation.
              <br /><br />
              In my free time, I contribute to open-source projects and love to engage in community events to share knowledge and collaborate with like-minded developers.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="skills" className="skills">
        <div className="skillhead"><h2>Skills</h2></div>
        <div className="skill-list">
          <div>C++</div>
          <div>C</div>
          <div>Python</div>
          <div>JavaScript</div>
        </div>
        <div className="skill-list">
          <div>OpenCV</div>
          <div>React</div>
          <div>Node.js</div>
          <div>HTML/CSS</div>
        </div>
        <div className="skill-list">
          <div>DSA/CP</div>
          <div>Machine Learing</div>
          <div>Fullstack Developement</div>
          <div>Git</div>
        </div>
      </section>

      <hr className="divider" />

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
        <div className="project">
          <div><h3>Project 1: Wire Colour Code Tester</h3></div>
          <div>
            <p>This project involves developing a system that detects and validates wire color codes using machine learning and OpenCV. It ensures correct wiring by identifying the color codes of wires in electrical circuits and categorizing them based on pre-defined standards.</p>
          </div>
          <div>
            <a href="https://github.com/kingPercy11/Automatic-2-Line-Flat-Wire-Color-Sequence-Detector-public" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>

        <div className="project">
          <div><h3>Project 2: CricAlerts - Automated Cricket Score Bot</h3></div>
          <div>
            <p>CricAlerts is a Python-based bot that automatically sends live cricket scores to users through Telegram. It uses BeautifulSoup to scrape live score data and integrates with the Telegram API to deliver real-time match updates efficiently.</p>
          </div>
          <div>
            <a href="https://github.com/kingPercy11/CricAlrts-automated-cricket-score-notifier-" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>

        <div className="project">
          <div><h3>Project 3: QR Code Scanner</h3></div>
          <div>
            <p>A user-friendly application that scans and decodes QR codes using OpenCV. The scanner processes and displays the embedded information, making it useful for various purposes like event ticketing, payments, and product information.</p>
          </div>
          <div>
            <a href="https://github.com/kingPercy11/QR-code-scanner" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>

        <div className="project">
          <div><h3>Project 4: OMR Grader</h3></div>
          <div>
            <p>An automated grading system that uses computer vision techniques to read Optical Mark Recognition (OMR) sheets. It processes answer sheets quickly and accurately, providing results without manual intervention, ideal for academic exams and surveys.</p>
          </div>
          <div>
            <a href="https://github.com/kingPercy11/OMR-grader" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>

        <div className="project">
          <div><h3>Project 5: Hand Gesture Detector</h3></div>
          <div>
            <p>A machine learning model built using OpenCV that detects and classifies hand gestures in real-time. This project is aimed at enabling touchless interactions, potentially useful for sign language recognition, gaming, and gesture-controlled interfaces.</p>
          </div>
          <div>
            <a href="https://github.com/your-repo-4" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>
      </div>
      </section>

      <hr className="divider" />

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me for any inquiries or opportunities!</p>
        <div className="contact-icons">
          <a href="mailto:pranjalchaurasia11@gmail.com">✉️ Email</a>
          <a href="https://github.com/kingPercy11" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
          <a href="https://www.linkedin.com/in/pranjal-chaurasia-45837928a/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Pranjal Chaurasia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
