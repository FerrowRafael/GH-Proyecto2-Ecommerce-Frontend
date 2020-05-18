// RESULTS
import React, { Component, Fragment } from 'react'
import { Radio } from 'antd';
import axios from 'axios'
import { API_URL } from '../../api-config';
import Product from '../../components/Product/Product';
import SearchResults from '../../components/SearchResults/SearchResults';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Results extends Component {
    state = {
        query: '',
        results: [],
        value: 1,
      }

  render(){
    if(this.props.result){
      console.log("hola")
    }
    console.log(this.props.result)
      return(
        <Fragment>
            <div>
              <SearchResults/>
            </div>
        </Fragment>
      )
  }
}


const mapStateToProps = (state) => { 
	return ({result: state.result})
}
export default connect(mapStateToProps)(withRouter(Results));