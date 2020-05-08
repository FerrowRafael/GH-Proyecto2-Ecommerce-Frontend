import React, { Component } from 'react'
import './SearchResults.scss';
import axios from "axios";
import { API_URL } from '../../api-config';

export default class SearchResults extends Component {

    constructor(props) {
        super(props),
        this.state = {}
    }

    componentDidMount() {
        const { name } = this.props.match.params;
        axios.get(API_URL + '/products/search/name=' + name)
            .then(res => this.setState({ product: res.data }))
    }

    render() {
        return (
            console.log(this.state),
            <input class="form-control" value={this.state.text} onChange={(text) => this.filter(text)}/>
        )
    }

}