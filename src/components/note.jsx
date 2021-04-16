import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <div className='title'>{this.props.title}</div>
                <div className='text'>{this.props.text}</div>
            </div>
        )
    }
}
