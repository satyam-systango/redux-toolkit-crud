import React, { useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { retrieveTodos, deleteTodo } from '../../slice/todo'
import { Link } from 'react-router-dom'
const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
 
    useEffect(() => {
        dispatch(retrieveTodos())
    },[])
    return(<div>{
        todos.map((item, index) => {
            return(<div key={index}>{ item.title }
             <Link to={`/todos/${item._id}/edit`} >edit</Link> 
             <Link to={'#'} onClick={() => dispatch(deleteTodo(item._id))} >Delete</Link> 
             </div>)
        })
        }</div>)
} 
export default TodoList