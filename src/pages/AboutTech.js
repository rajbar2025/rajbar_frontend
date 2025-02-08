import "../styles/abouttech.css";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Jigar Kalodia",
    role: "Head of Tech",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQH42QIogbZsuA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663787108021?e=2147483647&v=beta&t=OXVZREB5AWt7g6XUkt-pV09nVYRBpd547KU2-5LMxMc",
    description: "Architecting scalable solutions to redefine the digital landscape.",
    profileUrl: "https://www.linkedin.com/in/jigar-kalodia/",
  },
  {
    name: "Saqulain",
    role: "Tech Lead",
    image: "https://drive.google.com/uc?export=view&id=1ah4qyN1cl9O_wWEDr--fpVNc3XTvsGLq",
    description: "Bridging innovation with performance to build seamless experiences.",
    profileUrl: "https://www.linkedin.com/in/saqulain/",
  },
  
];

const TechTeam = () => {
  return (
    <div className="tech-team-container">
      <h2 className="tech-team-title">Innovating the Digital Frontier</h2>
      <p className="tech-team-subtitle">
        <strong>YarsiCorp</strong> is a one-stop solution for web development, marketing, 
        software automation, and business transformation. Our team of skilled 
        professionals is dedicated to delivering cutting-edge solutions that 
        empower businesses and drive growth.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            className="team-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={member.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              <img
                src={member.image}
                alt={`Profile picture of ${member.name}`}
                className="team-image"
                onError={(e) => (e.target.src = "https://via.placeholder.com/200")} // Fallback image
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </a>
          </motion.div>
        ))}
      </div>
      <br/>

      <div className="tech-team-cta">
        <h3>Let’s Build the Future Together</h3>
        <p>
          Whether you're looking for a robust web solution, business automation, 
          or marketing expertise, <strong>YarsiCorp</strong> has got you covered. 
          Let’s transform your vision into reality.
        </p>
        <a href="https://yarsicorp.com" className="cta-button">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default TechTeam;
