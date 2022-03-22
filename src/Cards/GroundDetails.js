import React, {Component} from "react";
import './stadium-info.css'

class  GroundDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading:true,
            Ground : null
        };

    }
    async componentDidMount(){
        const id = window.location.pathname.split('/')[2];
        const response=await fetch(`/ground/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : 'http://www.google.com',
                'method': 'GET'
            },
            credentials: 'include'
        });

        const body= await response.json();
        console.log(body);
        this.setState({
            Ground:body,
            isLoading:false
        })


    }
    render(){
        const isLoading  = this.state.isLoading;
        if(isLoading)
            return <div>Loading...</div>
        return(
            <span>
                <div>Name: {this.state.Ground.name}</div>
                <div>Description: {this.state.Ground.description}</div>
                <div>Capacity: {this.state.Ground.capacity}</div>
                <div>Location: {this.state.Ground.location}</div>
                <div>Year of opening: {this.state.Ground.opened}</div>
                <div>Year of renovating: {this.state.Ground.renovated}</div>

            </span>
        )
    }
}
export default GroundDetails;