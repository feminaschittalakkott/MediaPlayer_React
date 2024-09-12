import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../services/allApis';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';

function Category() {

  const [show, setShow] = useState(false);
  const [category, setCategory] = useState({
    cid: "",
    ctitle: "",
    videos: []
  });

  const handleAddCat = async () => {
    console.log(category)
    const { cid, ctitle } = category;
    if (!cid || !ctitle) {
      toast.warning("Please enter valid input")
    } else {
      try {
        const res = await addCategory(category);
        console.log(res)
        if (res.status == 201) {
          toast.success("Category added successfully !")
          handleClose()
          setCategory({
            cid: "",
            ctitle: "",
            videos: []
          })
        }
        else {
          toast.error("Category adding failed !")
        }
      }
      catch (err) {
        console.log(err)
        toast.error("Category adding failed !")
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-grid'>
        <Button variant='btn btn-info' onClick={handleShow}>Add Category</Button>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="catId" label="Category Id" className="mb-3">
            <Form.Control type="number" placeholder="1" onChange={(e) => { setCategory({ ...category, cid: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="cat_title" label="Category Title" className="mb-3">
            <Form.Control type="text" placeholder="Title" onChange={(e) => { setCategory({ ...category, ctitle: e.target.value }) }} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCat}>Add</Button>
        </Modal.Footer>
      </Modal>
      <CategoryList add={category} />
    </>
  )
}

export default Category