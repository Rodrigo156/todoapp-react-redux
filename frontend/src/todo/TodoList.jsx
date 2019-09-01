import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/IconButon'
import {maskAsDone , maskAsPending , deleteTask} from './todoActions'
import { bindActionCreators } from 'redux';


const TodoList = props => {
    
    const renderRows = ()=>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
               <td> {todo.description}</td>
               <td><IconButton style="success" icon="check" hide={todo.done}
                        onClick={()=> props.maskAsDone(todo)}  />
               <IconButton style="warning" icon="undo" hide={!todo.done}
                        onClick={()=> props.maskAsPending(todo)}  />
               <IconButton style="danger" icon="trash-o" hide={!todo.done}
                        onClick={()=> props.deleteTask(todo)}  /></td>
            </tr>
        ))
    }
    
    return(
        <div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th className="tableActions">ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch =>
bindActionCreators({maskAsDone , maskAsPending , deleteTask} , dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
