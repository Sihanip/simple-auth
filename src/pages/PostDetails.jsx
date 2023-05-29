import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsDetails } from '../redux/actions/post'
import { Link, useParams } from 'react-router-dom'

function PostDetails () {
    
    const dispatch = useDispatch()
    const { id } = useParams()

    const { postDetails } = useSelector((state) => state.post)
    
    useEffect(() => {
        dispatch(getPostsDetails(id))
    }, [dispatch, id])

    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-center">{postDetails?.title}</h1>
                <p class="text-justify" style={{ textAlign: "justify" }}>{postDetails?.body}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button as={Link} variant="primary" to={"/posts"}> Back </Button>
                </Col>
            </Row>
        </Container>
  )
}

export default PostDetails