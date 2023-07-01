import React from "react";

class Hellow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("component Did update")
    }
    render(){
        console.log(123,this.props.name)
        return(
            <>
            <h1>Hellow : {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count + 1})}>update</button>
            </>
        )
    }
}

export default Hellow;