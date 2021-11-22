import React, {useContext} from 'react';//
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {NavLink} from "react-router-dom"
import {AUTH_ROUTE, USER_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE, CREATE_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom"

const NawBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SEARCH_ROUTE}>Електронна медична катка</NavLink>

                    {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(USER_ROUTE + '/' + 1)}>Пацієнт</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-4"
                            onClick={() => navigate(SEARCH_ROUTE)}>Пошук</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color:'white'}}>
                        </Nav>
                    }
                {user.isDoctor ?
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(USER_ROUTE + '/' + 1)}>Лікар</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-4"
                            onClick={() => navigate(REGISTRATION_ROUTE)}>Реєстрація пацієнта</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-4"
                            onClick={() => navigate(SEARCH_ROUTE)}>Пошук</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-4"
                            onClick={() => navigate(CREATE_ROUTE)}>Створити запис</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white'}}>
                    </Nav>
                }
                {!user.isAuth && !user.isDoctor ?
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"}
                                onClick={() => navigate(AUTH_ROUTE)}>Авторизація</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white'}}>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NawBar;