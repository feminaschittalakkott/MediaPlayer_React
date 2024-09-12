import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis';

function Videos({add}) {

  const [videos, setVideos] = useState([]);
  const [deleteResponse, setDeleteResponse] = useState("");

  useEffect(() => {
    getData()
  }, [add, deleteResponse])

  const getData = async() => {
    const res = await getVideos()
    console.log(res)
    if (res.status == 200) {
      setVideos(res.data)
    } else {
      console.log(res)
    }
  }

  return (
    <>
      <div className='mb-3'>
        {
          videos.length > 0 ?
            <Row>
              {
                videos.map(i => (
                  <Col md={4} sm={12}>
                    <VideoCard video={i} delresponse={setDeleteResponse} />
                  </Col>
                ))
              }
            </Row>
            :
            <h2 className='text-center text-danger'>No videos available !!!</h2>
        }
      </div>
    </>
  )
}

export default Videos