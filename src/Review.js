import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function Review({reviews}) {
  return (
    <div>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
            {
                reviews.map(i=>
                    <ListGroup.Item>
                      <p>name {i.name}</p>
                      <h5>date {i.date}</h5>
                      <h5>Rating {i.rating}</h5>
                      <p>comments {i.comments}</p>

                    </ListGroup.Item>

                    )
    }
    </ListGroup>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Review