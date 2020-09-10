import React from 'react';
import { Container, Row, Col,Breadcrumb } from 'react-bootstrap';
import Filters from './Filter'
import CategoryList from './CategoryList'
const Categories = () =>{

    return(
        <Container>
            <Breadcrumb className="small">
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://www.myntra.com/clothing?src=bc">
                Clothing
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Jackets For Men & Women</Breadcrumb.Item>
            </Breadcrumb>
            <p className="text-left">
            <b>Jackets For Men & Women</b> - 20933 items
            </p>
            <Row>
                <Col>
                    <Filters/>
                </Col>

                <Col md={9}>
                    <CategoryList/>
                </Col>
            </Row>
        </Container>
    )

}

export default Categories;