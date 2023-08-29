import './index.css';
import Avatar from '../../components/avatar';
import githubimage from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import emailIcon from '../../assets/email.png';

const handleClick = location => {
  window.location.href = location;
};
export default function Home() {
  return (
    <div>
      <section className="home-section-container">
        <Avatar />
        <div>
          <p>olá, eu sou</p>
          <h1>Crismael Bastos</h1>
          <p>Desenvolvedor Backend</p>
        </div>

        <div className="social-container">
          <img
            onClick={() => handleClick('https://github.com/Crismael-Bastos/')}
            className="social-icon icon"
            src={githubimage}
            alt="github icon"
          />

          <img
            onClick={() => handleClick('https://www.linkedin.com/in/crismael-bastos-b6a48a12a/')}
            className="social-icon icon"
            src={linkedinIcon}
            alt="linkedin icon"
          />
          <img
          onClick={()=> handleClick('mailto:crismaelnogueira.dev@gmail.com')} 
          className="social-icon icon" src={emailIcon} alt="email icon" />
        </div>
      </section>
    </div>
  );
}
