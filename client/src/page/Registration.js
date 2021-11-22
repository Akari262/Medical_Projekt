import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import {Button} from "react-bootstrap"
//import {registration} from "../http/userAPI";
import {useNavigate} from "react-router-dom"
import {SEARCH_ROUTE} from "../utils/consts";

const Registration = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /*const signIn = async () => {
        const response = await registration(email, password)
        console.log(response)

    }*/

        return (
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54} }
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">Реєстрація користувача</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-2"
                            placeholder="Ім'я"
                            //style={{height:100} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Прізвище"
                            //style={{height:100} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Дата народження"
                            //style={{height:100} }
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="E-Mail"
                            //style={{height:100} }
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-2"
                            placeholder="Пароль"
                            //style={{height:100} }
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="form-group mt-2">
                            <label htmlFor="exampleFormControlSelect1">Роль</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>USER</option>
                                <option>DOCTOR</option>
                            </select>
                        </div>
                        <Button className="mt-3 "
                                variant={"outline-success"}
                                onClick={() => navigate(SEARCH_ROUTE)}>>
                            Зареєструвати
                        </Button>

                    </Form>

                </Card>
            </Container>
        );
    };

export default Registration;