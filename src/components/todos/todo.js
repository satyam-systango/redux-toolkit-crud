import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodos, retrieveTodo } from '../../slice/todo'
import { Row , Col, Form, Input, Button, Label, FormGroup } from 'reactstrap'
const Todo = (props) => {
    const id  = props.match?.params?.id
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todos)
    const [data, setData ] = useState({})


    useEffect(() => {
        id && dispatch(retrieveTodo(id))
    },[dispatch, id])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTodos(data))
    }
    const handleChange = (event) => {
        data[event.target.name] = event.target.value
        setData({...data})
    }
    return(<Form onSubmit={ handleSubmit }>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="title">
                Name
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="with a placeholder"
                type="text"
                defaultValue={ todo?.title }
                onChange={ handleChange }
              />
              <Button type='submit'>submit</Button>
            </FormGroup>
            </Col >
            </Row>
        </Form>)
} 

export default Todo