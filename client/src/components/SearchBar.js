import React, {useState} from 'react';///, {useContext}
import {observer} from "mobx-react-lite"
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
///import {Context} from "../index";
import {NOTES_ROUTE} from "../utils/consts";

const SearchBar = observer(() => {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    ///const {notes} = useContext(Context)

    const getOne = async () => {
        //const response = await getOne(id);
        //console.log(response)
        navigate(NOTES_ROUTE + '/' + 1);
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54} }
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Пошук</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-2"
                        placeholder="Введіть ID запису"
                        //style={{height:100} }
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <Button className="mt-3 "
                            variant={"outline-success"}
                    onClick={getOne}>
                        Знайти
                    </Button>

                </Form>

            </Card>
        </Container>
    );
});

export default SearchBar;