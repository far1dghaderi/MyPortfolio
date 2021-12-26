import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const en_cv =
  "https://drive.google.com/file/d/1yGmDEPkYVaq1__1df4VOUe8mQn3CICOI/view?usp=sharing";
const pr_cv =
  "https://drive.google.com/file/d/157AG5HqmcB0XFjDqTXR3vqrhqCGrYNCr/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pr_cv} target="_blank">
            <AiOutlineDownload />
            &nbsp;View Persian CV
          </Button>
        </Row>
        <br />
        <br />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={en_cv} target="_blank">
            <AiOutlineDownload />
            &nbsp;View English CV
          </Button>
        </Row>
        <br />
        <br />
        <br />
        {/* <Row className="resume">
          <Document file={en_cv}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
