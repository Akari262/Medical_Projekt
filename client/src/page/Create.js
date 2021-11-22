import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Create = () => {
    return (
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight+50} }
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">Створення запису</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-2"
                            placeholder="Назва запису"
                            //style={{height:100} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="ID лікаря"
                            //style={{height:100} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="ID пацієнта"
                            //style={{height:100} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Дата"
                            //style={{height:100} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Текс запису"
                            style={{height:150} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Рекомендації"
                            style={{height:150} }
                        />

                        <Button className="mt-3 "
                                variant={"outline-success"}>
                            Створити
                        </Button>

                    </Form>

                </Card>
            </Container>
    );
};

export default Create;