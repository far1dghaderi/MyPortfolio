import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Farid Ghaderi </span>
            from <span className="purple"> Sanandaj, Iran.</span>
            <br />I am a junior Node.js Developer since early 2020, but I didn't
            work in companies and organizations, So I don't have much
            experience.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out and Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music and Podcasts
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "There have to be reasons that you get up in the morning and you
            want to live!"{" "}
          </p>
          <footer className="blockquote-footer">Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
