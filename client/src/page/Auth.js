import React, {/*useContext,*/ useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import {Button} from "react-bootstrap"
//import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
//import {Context} from "../index";
import {useNavigate} from "react-router-dom"
import {SEARCH_ROUTE} from "../utils/consts";

const Auth = observer(() => {
    const navigate = useNavigate()
    //const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /*const logIn = async () => {
        let data;
        data = await login(email, password)
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SEARCH_ROUTE)
    }*/
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54} }
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизація</h2>
                <Form className="d-flex flex-column">
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
                        type="password"
                    />
                    <Button className="mt-3 "
                            variant={"outline-success"}
                            onClick={() => navigate(SEARCH_ROUTE)}>
                        Ввійти
                    </Button>

                </Form>

            </Card>
        </Container>
    );
});

export default Auth;