import React, { Component } from 'react'
import './SearchBar.scss';

export default class SearchBar extends Component {

    constructor(props) {
        super(props),
        this.state = {}
    }


    render() {
        return (
            console.log(this.state),
            <input class="form-control" value={this.state.text} onChange={(text) => this.filter(text)}/>
        )
    }

}