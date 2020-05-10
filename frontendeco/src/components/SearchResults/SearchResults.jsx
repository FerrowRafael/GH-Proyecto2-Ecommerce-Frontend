import React, { Component } from 'react'
import './SearchResults.scss';
import axios from "axios";
import { API_URL } from '../../api-config';
import Suggestions from '../Sugerencias/Sugerencias'

export default class SearchResults extends Component {

    constructor(props) {
        super(props),
        this.state = {}
    }

    render() {
        return (
            <Suggestions results={this.state.results} />
        )
    }

}