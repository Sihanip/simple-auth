import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
    <Container>
        <Row>
            <Col>
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                <h2>About Me</h2>
                <p>Ini adalah tentang saya</p>
            </div>
        </Col>
        </Row>
    </Container>
    );
}

export default About;