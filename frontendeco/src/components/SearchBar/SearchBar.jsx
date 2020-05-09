import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../../api-config';
import Suggestions from '../Sugerencias/Sugerencias'
import { Form, Input, Button, notification } from 'antd';

class Search extends Component {
  state = {
    query: '',
    results: []
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
      <Form>
        <Input
          placeholder="Busca producto"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Button>Buscar</Button>
        <Suggestions results={this.state.results} />
      </Form>
    )
  }
}

export default Search