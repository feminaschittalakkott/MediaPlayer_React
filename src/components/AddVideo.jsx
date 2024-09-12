import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../services/allApis';
import { toast } from 'react-toastify';

function AddVideo({response}) {

  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    vid: "",
    title: "",
    imgurl: "",
    vidurl: ""
  })

  const handleUpload = async() => {
    console.log(video)
    const { vid, title, imgurl, vidurl } = video;
    if (!vid || !title || !imgurl || !vidurl) {
      // alert("Please enter valid input")
      toast.warning("Please enter valid input")
    }
    else {
      try {
        const vurl = vidurl.split("v=")[1];
        const eurl = `https://www.youtube.com/embed/${vurl}`;
        video.vidurl = eurl;
        const res = await addVideos(video)
        console.log(res)
        if (res.status == 201) {
          // alert("Uploaded Successfully !")
          toast.success("Uploaded Successfully !")
          handleClose();
          response(res)
        }
        else {
          // alert("Upload failed !")
          toast.error("Upload failed !")
        }
      }
      catch (err) {
        console.log(err)
        // alert("Upload failed !")
        toast.error("Upload failed !")
      }
    }
  }

  const handleClose = () => {
    setShow(false)
    setVideo({
      vid: "",
      title: "",
      imgurl: "",
      vidurl: ""
    })
  };
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
            <Form.Control type="number" placeholder="1" onChange={(e) => {setVideo({ ...video, vid: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="video_title" label="Video Title" className="mb-3">
            <Form.Control type="text" placeholder="Title" onChange={(e) => {setVideo({ ...video, title: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="video_imgurl" label="Video Image Url" className="mb-3">
            <Form.Control type="text" placeholder="Title" onChange={(e) => {setVideo({ ...video, imgurl: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="yv_url" label="Youtube Video Url" className="mb-3">
            <Form.Control type="text" placeholder="Title" onChange={(e) => {setVideo({ ...video, vidurl: e.target.value }) }} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo