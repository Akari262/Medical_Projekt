import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


const User = () => {
    const user = {id: 1, first_name: "Ivan", last_name: "Taran", date_of_birth: "04.08.2021", role: "DOCTOR"}
    return (

        <Container className="mt-3">
            <Row>
                <Col md={12}>
                    <Row>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <h3> </h3>
                    </Row>
                    <Row>
                        <h4>ID користувача: {user.id}</h4>
                        <h4>Дата народження: {user.date_of_birth}</h4>
                        <h4>Роль: {user.role}</h4>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default User;