import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddVideo() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn' onClick={handleShow}><i className="fa-solid fa-circle-plus" style={{ color: "#B197FC" }}></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
            <Form.Control type="number" placeholder="1" />
          </FloatingLabel>
          <FloatingLabel controlId="video_title" label="Video Title" className="mb-3">
            <Form.Control type="text" placeholder="Title" />
          </FloatingLabel>
          <FloatingLabel controlId="video_imgurl" label="Video Image Url" className="mb-3">
            <Form.Control type="text" placeholder="Title" />
          </FloatingLabel>
          <FloatingLabel controlId="yv_url" label="Youtube Video Url" className="mb-3">
            <Form.Control type="text" placeholder="Title" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo