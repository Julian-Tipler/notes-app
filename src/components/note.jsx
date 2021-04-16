import React, { Component } from 'react'

export default class Note extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input name="title" value={this.props.title} onChange={e=> this.props.onUpdateNote(e,this.props.index)} className='title'/>
                <input name='text' value={this.props.text} onChange={e=>this.props.onUpdateNote(e,this.props.index)} className='text'/>
            </div>
        )
    }
}
