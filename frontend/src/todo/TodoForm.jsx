import React , { Component }  from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButon'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {changeDescription , search , add , clear} from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        return(
            <div role="form" className="todoForm">
            <Grid cols='12 9 10' >
                <input type="text" className="form-control" 
                        placeholder="Adiocione a tarefa"
                        value={this.props.description} 
                        onChange={this.props.changeDescription}/>
            </Grid>
            
            <Grid cols='12 3 2' >    
                <IconButton  onClick={() => this.props.add(this.props.description)} style="primary" icon="plus"></IconButton>
                <IconButton  onClick={() => this.props.search()} style="info" icon="search"></IconButton>
                <IconButton  onClick={this.props.clear} style="default" icon="close"></IconButton>
    
            </ Grid>
        </div>
        )
    }

}

const mapStateToProps = state =>({
    description: state.todo.description
})
const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription , search , add , clear}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)