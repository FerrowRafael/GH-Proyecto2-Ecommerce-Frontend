import React, { Component } from 'react'
import './SearchResults.scss';
import Product from '../../components/Product/Product';
import axios from "axios";
import { API_URL } from '../../api-config';
// import Suggestions from '../Sugerencias/Sugerencias'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
          results: [],
        }
    }

    componentDidMount() {
        this.getInfo()
    }
    getInfo = () => {
        console.log(this.props.productSearchResult)
        axios.get('http://localhost:3001/products/search/name=' + this.props.productSearchResult)
          .then(({ data }) => {
            console.log(data) 
            this.setState({
              results: data   
                                      
            })
              
          })
      }
    render() {
        return (
            <div className="products">
                {(this.state.results)?.map(product => <Product key={product._id} product={product}/>)}
            </div>
 
            // <Suggestions results={this.state.results} />
        )
    }

}

const mapStateToProps = (state) => { // ese state es de redux
	return ({productSearchResult: state.productSearchResult})
}
export default connect(mapStateToProps)(withRouter(SearchResults));