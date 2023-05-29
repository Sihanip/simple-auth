import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Dashboard() {

  const { user } = useSelector((state) => state.auth)

  return (
    <Container className='p-4'>
        <Row>
            <Col>
              <div className="d-felx justify-content-center flex-column">
                <Card className="text-center">
                  <Card.Header>Dashboard</Card.Header>
                  <Card.Body>
                    <Card.Title>My Profile</Card.Title>
                    <Card.Text> Hello, my name is {user?.name} </Card.Text>
                  </Card.Body>
                  <Card.Footer>{user?.email}</Card.Footer>
                </Card>
              </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard