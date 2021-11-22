import React from 'react';
import {Col, Container, Row} from "react-bootstrap"

const Notes = () => {
    const note = {id: 1, id_patient: 1, id_doctor: 4, date: "04.08.2021", name: "Запис 3", text: "Текст запису 3", recomendation: "Рекомендація по лікуванню 3"}
    return (

        <Container className="mt-3">
            <Row>
            <Col md={12}>
                <Row>
                    <h3>{note.name}</h3>
                </Row>
                <Row>
                    <h4>ID запису: {note.id}</h4>
                    <h4>ID пацієнта: {note.id_patient}</h4>
                    <h4>ID лікаря: {note.id_doctor}</h4>
                    <h4>Дата відвідування: {note.date}</h4>
                    <h4>Запис:</h4>
                    <h5>{note.text}</h5>
                    <h4>Рекомендації:</h4>
                    <h5>{note.recomendation}</h5>
                </Row>
            </Col>
            </Row>
        </Container>
    );
};

export default Notes;