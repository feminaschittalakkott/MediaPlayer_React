import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

function Landing() {
  return (
    <>
      <div className="container-fluid mb-5 d-flex align-items-center" style={{height: "85vh"}}>
        <Row>
          <Col className='p-5' sm={12} md={7}>
            <h2><i className="fa-solid fa-video" style={{ color: "#9933CC" }}></i> Media Player 2024</h2>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eaque, dicta labore enim, soluta ipsa laboriosam omnis iure modi natus ducimus, aliquid neque mollitia consequuntur animi quidem totam reprehenderit harum.</p>
            <div className='d-grid'>
              <Link to="/login" className='btn btn-info'>Let's Go</Link>
            </div>
          </Col>
          <Col sm={12} md={5}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/media-player-illustration-download-in-svg-png-gif-file-formats--video-streaming-tutorial-internet-live-device-tech-pack-people-illustrations-6369983.png?f=webp" alt="LandingImg" className='img-fluid' />
          </Col>
        </Row>
      </div>
      <div className='container-fluid mt-5'>
        <h3 className='my-3 text-center'>Features</h3>
        <div className='p-4 d-flex justify-content-around'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/3873964/screenshots/16998621/media/a14b8b0ec5708cd75a99977c616c7ca3.gif" />
            <Card.Body>
              <Card.Title>Upload Youtube Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/469998/screenshots/2325648/output_bsrh32.gif" />
            <Card.Body>
              <Card.Title>Add Categories</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://media1.giphy.com/media/dWOKEQ5ewh94RJLemj/200w.gif?cid=6c09b952yaxpr7cuzp4l33ty0ib0xktbnld1gedhv79eajjb&ep=v1_gifs_search&rid=200w.gif&ct=g" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="p-5">
        <Row>
          <Col sm={12} md={7}>
            <h4>Simple and Faster</h4>
            <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, neque ipsa. Laborum enim quaerat architecto, fuga, nam, consectetur corrupti dolor ratione possimus dolorem commodi ex perferendis ipsum. Laborum, ratione reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, recusandae laborum. In culpa vero dicta sed molestiae odit maxime eaque voluptates, dolores reprehenderit impedit doloremque debitis suscipit quod id quos.</p>
          </Col>
          <Col sm={12} md={5}>
          <iframe width="100%" height="391" src="https://www.youtube.com/embed/lAFbKzO-fss" title="React JS Full Course 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing