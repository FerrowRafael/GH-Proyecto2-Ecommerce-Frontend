import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../../api-config';
import Suggestions from '../Sugerencias/Sugerencias'
import { Form, Input, Button, Radio } from 'antd';

class Search extends Component {
  state = {
    query: '',
    results: [],
    value: 1,
  }

  getInfo = () => {
    axios.get(API_URL + '/products/searchMe/input=' + this.state.query)
      .then(({ data }) => {
        this.setState({
          results: data                                         
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }


  render() {
    return (
      <div>
        <input
          placeholder="Busca producto"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Button onClick="dameResults()">Buscar</Button>
        <Suggestions results={this.state.results} />
      </div>
    )
  }
}

export default Search