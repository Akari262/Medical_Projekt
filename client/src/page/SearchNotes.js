import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SearchBar from "../components/SearchBar";

const SearchNotes = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <SearchBar/>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchNotes;