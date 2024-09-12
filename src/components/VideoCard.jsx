import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo } from '../services/allApis';
import { toast } from 'react-toastify';

function VideoCard({video, delresponse}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete=async()=>{
        const res = await deleteVideo(video.id)
        console.log(res)
        if(res.status == 200){
            toast.success("Video deleted Successfully !")
            delresponse(res)
        } else{
            toast.error("Deletion Failed !!!")
        }
    }

    return (
        <>
            <Card className='my-3' style={{ width: '18rem' }}>
                <Card.Img style={{cursor: "pointer"}} onClick={handleShow} variant="top" src={video?.imgurl} />
                <Card.Body>
                    <Card.Title>{video?.title}</Card.Title>
                    <Button variant='btn' onClick={handleDelete}>
                        <i className="fa-solid fa-trash" style={{ color: "#f70808", }} />
                    </Button>
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