import React,{Component} from 'react';

class Addtodo extends Component{
    state={
        id:null,
        content:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
            id:Math.random()
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div className="center container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                    <span><button>ADD TODO</button></span>
                </form>
            </div>
        )
    }
    
}

export default Addtodo