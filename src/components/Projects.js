import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ABCLearning from "../assets/img/ABC Learning.png";
import HowToDraw from "../assets/img/HowToDraw.png";
import Valentine from "../assets/img/Valentine.png";
import Vacation from "../assets/img/Vacation.png";
import Enomy from "../assets/img/Enomy.png";
import Liferay from "../assets/img/Liferay.png";
import EyeLevelPhoto from "../assets/img/EyeLevelPhoto.jpg";
import LowLevelPhoto from "../assets/img/LowLevelPhoto.jpg";
import HighLevelPhoto from "../assets/img/HighLevelPhoto.jpg";
import Piken from "../assets/img/Piken.png";
import SaguTumbu from "../assets/img/SaguTumbu.png";
import Gelas from "../assets/img/Gelas.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ABC Learning Website",
      description: "This is just a simple ABC Learning Center website that I have created using basic HTML, CSS and some JavaScript. In here we can see some information about the ABC company, its learning module, schedule and so on.",
      imgUrl: ABCLearning,
      link: "https://dacchy.github.io/abclearning/",
    },
    {
      title: "Basic How To Draw",
      description: "This is a basic how to draw ( a character ) website. This website consist of a single index page with some JavaScript that is responsible for the magic of the website, that is it cycle between multiple images to create this 'how to draw' concept.",
      imgUrl: HowToDraw,
      link: "https://dacchy.github.io/HowToDrawGilgamesh/",
    },
    {
      title: "Surprise Valentine",
      description: "This is what resulted when I was just experimenting with what I know, it turns out pretty well, and I ended up show this to my friend :D",
      imgUrl: Valentine,
      link: "https://dacchy.github.io/OpenForSurprise/",
    },
    {
      title: "Simple Vacation Locations",
      description: "This is just my showcases of places that I'd personally like to visit. Building this website just with basic and simple HTML, CSS and some JS to complete it.",
      imgUrl: Vacation,
      link: "https://dacchy.github.io/Places-I-d-like-to-visit/",
    },
    {
      title: "Enomy Finance",
      description: "Moving into Spring related project, this is one of my first Spring project that is using Spring MVC in the creation of this website.",
      imgUrl: Enomy,
    },
    {
      title: "Liferay Project",
      description: "Using a CMS ( Content Management System ) that is Liferay I was able to create this E Commerce website aswell, that have all the functions such as searching and put in cart and then buying the products, thanks to the CMS features.",
      imgUrl: Liferay,
    },
  ];

  const photographyProjects = [
    {
      title: "Eye Level Photoshoot",
      imgUrl:EyeLevelPhoto,
    },
    {
      title: "Low Level Photoshoot",
      imgUrl:LowLevelPhoto,
    },
    {
      title: "High Level Photoshoot",
      imgUrl:HighLevelPhoto,
    },
  ];

  const graphicDesignProjects = [
    {
      title: "Chips Packaging",
      description: "This is a simple chips packaging design I have created for one of my higschool project.",
      imgUrl: Piken,
    },
    {
      title: "Food Packaging",
      description: "This is a simple food packaging design I have created for one of my higschool project.",
      imgUrl: SaguTumbu,
    },
    {
      title: "Cup Design",
      description: "This is a simple Cup design I have created as a parting gift for one of my teacher.",
      imgUrl: Gelas,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Let's take a look into some projects that I have worked on.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Coding</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Photography</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {photographyProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {graphicDesignProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}