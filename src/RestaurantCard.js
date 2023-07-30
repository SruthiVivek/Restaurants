import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';



function RestaurantCard({ data }) {
    return (
        <Row>
            {
                data.map(i => (
                    <Col xs={12} sm={6} md={4} lg={3} xl={3}>
<Link to={`restaurantView/${i.id}`} style={{textDecoration:'none'}}>
                        <Card className='mt-4' style={{ width: '18rem', height: '500px' }}>
                            <Card.Img className='p-1 border'
                                style={{ height: "350px" }}
                                variant="top" src={i.photograph} />
                            <Card.Body className='text-center'>
                                <Card.Title>{i.name}</Card.Title>
                                <Card.Text>
                                    address:{i.address}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                ))
            }

        </Row>
    )
}

export default RestaurantCard