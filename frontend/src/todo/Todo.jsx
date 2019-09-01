import React  from 'react'

import PageHeader from '../template/PageHeader'
import TodoForm from '../todo/TodoForm'
import TodoList from '../todo/TodoList'


export default () => 
<div>
    <PageHeader  name="Tarefas" small="Cadastro"/>
    <TodoForm />
    <TodoList />
</div>



