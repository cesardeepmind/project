import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Button } from 'react-bootstrap'

import images1 from '../image/image1.jpg'
import images2 from '../image/image2.jpg'
import images3 from '../image/image3.jpg'

import './Card.css'

function Cards() {
  return (
    <div className='card-container'>
        <CardGroup>
            <Card className='text-center' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={images1} />
                <Card.Body>
                <Card.Title>Proveedor 1</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
            <Card className='text-center' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={images2} />
                <Card.Body>
                <Card.Title>Proveedor 2</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
            <Card className='text-center' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={images3} />
                <Card.Body>
                <Card.Title>Proveedor 3</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        </CardGroup>

        <CardGroup  className='pt-5'>
            <Card className='text-center' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={images1} />
                <Card.Body>
                <Card.Title>Proveedor 4</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
            <Card className='text-center' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={images2} />
                <Card.Body>
                <Card.Title>Proveedor 5</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
            <Card className='text-center' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={images3} />
                <Card.Body>
                <Card.Title>Proveedor 6</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        </CardGroup>
    </div>
  )
}

export default Cards