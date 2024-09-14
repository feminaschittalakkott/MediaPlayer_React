import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo, addHistory } from '../services/allApis';
import { toast } from 'react-toastify';

function VideoCard({ video, delresponse, cat }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async() => {
        setShow(true);
        const dt = new Date();
        const data = {vid: video.vid, title: video.title, vidurl: video.vidurl, datetime: dt};
        console.log(data)
        const res = await addHistory(data);
        console.log(res)
    }
    const handleDelete = async () => {
        const res = await deleteVideo(video.id)
        console.log(res)
        if (res.status == 200) {
            toast.success("Video deleted Successfully !")
            delresponse(res)
        } else {
            toast.error("Deletion Failed !!!")
        }
    }

    const dragHandler=(e)=>{
        console.log(e)
        console.log(video)
        e.dataTransfer.setData("video", JSON.stringify(video))
    }

    return (
        <>
            <Card className='my-3' style={cat ?{ width: '100%' } : { width: '18rem' }} onDragStart={(e)=>{dragHandler(e)}} draggable>
                <Card.Img style={{ cursor: "pointer" }} onClick={handleShow} variant="top" src={video?.imgurl} />
                <Card.Body>
                    <Card.Title>{video?.title}</Card.Title>
                    {
                        !cat &&
                    <Button variant='btn' onClick={handleDelete}>
                        <i className="fa-solid fa-trash" style={{ color: "#f70808", }} />
                    </Button>
                    }
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{video?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={video?.vidurl + "?autoplay=1"} title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard