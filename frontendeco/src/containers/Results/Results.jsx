// RESULTS
import React, { Component, Fragment } from 'react'
import { Radio } from 'antd';
import axios from 'axios'
import { API_URL } from '../../api-config';
import Product from '../../components/Product/Product';
import SearchResults from '../../components/SearchResults/SearchResults';

class Results extends Component {
    state = {
        query: '',
        results: [],
        value: 1,
      }

    // Filtro precio producto Mayor a Menor
      getInfoMay = () => {
        axios.get(API_URL + '/products/searchMayor')
          .then(({ data }) => {
            this.setState({
              results: data                                         
            })
            console.log(data)
          })
      }

    // Filtro precio producto Mayor a Menor
      getInfoMen = () => {
        axios.get(API_URL + '/products/searchMenor')
          .then(({ data }) => {
            this.setState({
              results: data                                         
            })
            console.log(this.state.results)
          })
      }

      // Recoge value Radio Button
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    }, () => {
      if ((e.target.value) === 1) {
        this.getInfoMay()
      } 
      else {
        this.getInfoMen()
      }
    })
  }

  render(){
      return(
        <Fragment>
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <p>Ordenar por precio</p>
                <Radio value={1}>De mayor a menor</Radio>
                <Radio value={2}>De menor a mayor</Radio>
            </Radio.Group>

            <div>
                <h2>Resultados</h2>
                <div className="products">
                    {this.state.results.map(product => <Product product={product}/>)}
                </div>
            </div>
            <div>
              <SearchResults/>
            </div>
        </Fragment>
      )
  }
}

export default Results;