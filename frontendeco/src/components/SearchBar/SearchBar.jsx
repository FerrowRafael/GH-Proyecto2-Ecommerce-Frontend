import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import { API_URL } from '../../api-config';
// import Suggestions from '../Sugerencias/Sugerencias'
import { Button, Input } from 'antd';
import { connect } from "react-redux";
//import store from "../../redux/store";
import { rdx_resultName } from "../../redux/actions/products";

class Search extends Component {
  state = {
    nombre: "",
    results: [],
    value: 1,
  }

  getInfo = () => {
    axios.get(API_URL + '/products/searchMe/input=' + this.state.nombre)
      .then(({ data }) => {
        this.setState({
          results: data                                         
        })
      })
  }

  handleInputChange = ev => {

    console.log(ev.target.value)
    this.setState({ [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value });
    // this.setState({
    //   query: this.search.value
    // }, () => {
    //   if (this.state.query && this.state.query.length > 1) {
    //     if (this.state.query.length % 2 === 0) {
    //       this.getInfo()
    //     }
    //   } else if (!this.state.query) {
    //   }
    // })
  }

  search(){
    console.log(this.state.nombre)
    rdx_resultName(this.state.nombre);
    this.props.history.push('/results/'+ this.state.nombre);
  }

  render() {
    
    return (
      <div>
        <div className="patata">
          <Input type="text" name="nombre"  
          placeholder="Busca producto" 
          value={this.state.nombre} 
          onChange={this.handleInputChange}/ >
          
          {/* <input
            type="text"
            placeholder="Busca producto"
            value={this.state.nombre}
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          /> */}
          <Button  type="primary" onClick={() => {this.search()}}>Buscar</Button>
          {/* <Suggestions results={this.state.results} /> */}
        </div>
        <div>{this.state.results}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { // ese state es de redux
	return ({productSearchResult: state.productSearchResult})
}

export default connect(mapStateToProps)(withRouter(Search));