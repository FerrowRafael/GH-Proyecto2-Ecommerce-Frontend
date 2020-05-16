import React, { Component, Fragment } from 'react'
import './SearchResults.scss';
import { Radio } from 'antd';
import Product from '../../components/Product/Product';
import axios from "axios";
import { API_URL } from '../../api-config';
// import Suggestions from '../Sugerencias/Sugerencias'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { productsAll } from "../../redux/actions/products";

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    }, () => {
      console.log(this.props.products)
      if ((e.target.value) === 1) {
        this.props.products.sort((a, b) => a.price - b.price)
        // console.log(ordenar)
        // return ordenar
        // this.props.products?.sort((a, b) => a.price - b.price)
        
      }
      else if((e.target.value) === 2) {
        this.props.products.sort((a, b) => b.price - a.price)
      }
    })
  }



  render() {
    const search = this.props.match.params.name
    // console.log(search, this.props.products);
    return (
      <Fragment>
        <div className="">
          <h3>{this.props.match.params.name}</h3>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <p>Ordenar por precio</p>
            <Radio value={1}>De mayor a menor</Radio>
            <Radio value={2}>De menor a mayor</Radio>
          </Radio.Group>

          <div className="products">
          

            {this.props.products
            ?.filter(p => search ? p.name.toLowerCase().includes(search.toLowerCase()) : true)
              ?.map(product => {
                console.log(product);
                return <Product key={product?._id} product={product} />
              })
            }

          </div>
        </div>
        

        {/* // <Suggestions results={this.state.results} /> */}
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => ({ products: state.products })
export default connect(mapStateToProps)(withRouter(SearchResults));