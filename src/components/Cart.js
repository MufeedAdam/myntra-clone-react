import React from 'react';
import { Container,Card,CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Cart = () =>{
    const items = {
        "count": 3,
        "value": [
          {
            "id": 2087285,
            "images": "http://assets.myntassets.com/assets/images/2087285/2019/11/29/98565725-11dc-4bf7-bd09-eb81c1627f571575026080891-Tommy-Hilfiger-Men-Navy-Blue-Analogue-Watch-TH1791381-409157-1.jpg",
            "name": "Tommy Hilfiger Men Navy Blue Analogue Watch",
            "category": "Watches",
            "mrp": 7500
          },
          {
            "id": 9137517,
            "images": "http://assets.myntassets.com/assets/images/9137517/2019/4/24/3faa54a1-0dd6-47fd-9027-40c4f8e77c0c1556107187029-Tommy-Hilfiger-Branded-fine-lining-Water-resistance-77215561-1.jpg",
            "name": "Tommy Hilfiger Unisex Grey Solid Backpack",
            "category": "Backpacks",
            "mrp": 3199
          },
         { "id": 9137527,
            "images":  "http://assets.myntassets.com/assets/images/9641501/2020/6/13/40473ff6-f474-40d2-be05-0062dc55e0f31592045731514TommyHilfigerMenNavyBlueAnalogueWatchTH1791556W1.jpg",
            "name": "Tommy Hilfiger Men Navy Blue Analogue Watch",
            "category": "Watches",
            "mrp": 7250
         }
        ],
        "currentCount": 3,
        "pageSize": 20,
        "deListedItems": []
      }


    return(
        <Container>
            <p className="text-left mt-5"><b>My Wishlisht </b>{items.count} items</p>
            <Container className="mx-5">
            <CardGroup>
              {items.value.map((value)=>(
                <Card style={{ width: '12rem',height:"20%" }} className="mx-5 my-5">
                <Card.Img variant="top" src={value.images}/>
                <Card.Body>
                  <Card.Title className="font-weight-normal">{value.name}</Card.Title>
                  <Card.Text>
                    Rs. {value.mrp}
                  </Card.Text>
                  <Card.Footer>
                    <h6 style={{color:"#ff3e6c"}}>MOVE TO BAG</h6>
                  </Card.Footer>
                </Card.Body>
              </Card>

    ))

              }
            </CardGroup>
            </Container>
        </Container>
    )
}

export default Cart;