import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <strong className="purple">Farid Ghaderi </strong>
            from <strong className="purple"> Sanandaj, Iran.</strong> I started
            to learn programming in the middle of 2019 with{" "}
            <strong className="purple">C#</strong> and because of an important
            exam that I was going to took, I just stopped learning programming
            for like 6-8 monthes and after that, I began programming again with{" "}
            <strong className="purple">Javascript</strong> and I'm in love with
            it till now :D. Because I love to{" "}
            <strong className="purple">solve probelms</strong> and mess around
            with <strong className="purple">data and logical problems </strong>,
            I chose Back-end for my starting stack, but for sure I will go for
            being a <strong className="purple">Full-stack</strong> developer in
            the near future; <strong className="purple">MERN stack</strong> is
            my favourite.
            <br />
            <br />
            As a human, I'm always <strong className="purple">
              ambitious
            </strong>{" "}
            and I'm always holding a lot of{" "}
            <strong className="purple">energy</strong> in my body. being
            <strong className="purple"> hard-working</strong>,
            <strong className="purple"> responsible</strong>,{" "}
            <strong className="purple"> fast-learner</strong> and{" "}
            <strong className="purple"> eager to learn</strong> are other
            possitive properties of my personlaity. For sure I'm not a perfect
            person and I do have some negative properties as well, but it
            totally depends on the environment that I'm working in, if it's
            good, I'm also good, otherwise, I will swtich to my not-good version
            as well.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying history, specially World Wars
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
            "Great things in business are never done by one person!"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
