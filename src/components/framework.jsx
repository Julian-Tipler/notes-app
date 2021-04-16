import React, { Component } from 'react'
import Note from './note'

export default class Framework extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes:[],
            currentNote:{},
            formTitle:"",
            formText:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let newNote = {
            title: this.state.formTitle,
            text: this.state.formText
        }
        this.setState(prevState=>({
            ...prevState,
            notes:[...prevState.notes,newNote],
            formTitle:"",
            formText:""
        }) )
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='formTitle' onChange={this.handleChange} value={this.state.formTitle}></input>
                    <input name='formText' onChange={this.handleChange} value={this.state.formText}></input>
                    <button type='submit'>Add Note</button>
                </form>
                <div className='note-display'>
                    {this.state.notes.map((note,i) => {
                        return <Note key={i} title={note.title} text={note.text}></Note>
                    })}
                </div>
                <div className='notes-titles'>
                    {this.state.notes.map((note,i) => {
                        return <div key={i}>{note.title}</div>
                    })}
                </div>
            </div>
        )
    }
}
