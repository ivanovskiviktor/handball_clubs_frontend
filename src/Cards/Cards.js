import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Card from "./Card";
import frenchLeague from "../Assets/french_league.png";
import germanLeague from "../Assets/german_league.png";
import hungarianLeague from "../Assets/hungarian_league.png";
import spainLeague from "../Assets/spain_league.jpg";
import Switch from "react-router-dom/es/Switch";
import Table from "../Table/Table";
import Router from "react-router-dom/es/Router";

class  Cards extends Component{
    constructor(props) {
        super(props);

        this.state={
            isLoading : true,
            Countries : null
        };
    }
    async componentDidMount(){
        const response=await fetch(`country`,{
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
            Countries:body,
            isLoading:false
        })

        console.log(body)

    }

    render() {
        const isLoading  = this.state.isLoading;
        if(isLoading)
            return <div>Loading...</div>
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card id={this.state.Countries[0].id} imgsrc={frenchLeague} title={this.state.Countries[0].countryName} description="Description for LNH Division 1"/>
                    </div>
                    <div className="col-md-3">
                        <Card id={this.state.Countries[2].id} imgsrc={germanLeague} title={this.state.Countries[2].countryName} description="Description for Handball-Bundesliga"/>
                    </div>
                    <div className="col-md-3">
                        <Card id={this.state.Countries[1].id} imgsrc={hungarianLeague} title ={this.state.Countries[1].countryName} description="Description for K&H Liga"/>
                    </div>
                    <div className="col-md-3">
                        <Card id={this.state.Countries[3].id} imgsrc={spainLeague} title={this.state.Countries[3].countryName} description="Description for Liga ASOBAL"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;