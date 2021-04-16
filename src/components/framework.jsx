import React, { Component } from 'react'
import Note from './note'
import './framework.css'

export default class Framework extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes:[],
            currentNoteIndex: -1,
            formTitle:"",
            formText:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.selectNote = this.selectNote.bind(this)
        this.onUpdateNote = this.onUpdateNote.bind(this)
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

    selectNote(e,index) {
        e.preventDefault();
        let currentNote = this.state.notes[index];
        this.setState({currentNoteIndex:index})
    }

    onUpdateNote(e,index){
        const updatedNotes = this.state.notes.map((note,i)=> {
            if(index===i){
                note[e.target.name] = e.target.value
            }
            return note
        })
        this.setState({notes:updatedNotes})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='formTitle' onChange={this.handleChange} value={this.state.formTitle}></input>
                    <textarea name='formText' onChange={this.handleChange} value={this.state.formText}></textarea>
                    <button type='submit'>Add Note</button>
                </form>
                <div className='main-container'>
                    <div className='notes-titles'>
                        {this.state.notes.map((note,i) => {
                            return <div className={`note-title ${note.index === this.state.currentNoteIndex ? 'selected' : ''}`}onClick={e=>this.selectNote(e,i)} key={i} >{note.title}</div>
                        })}
                    </div>
                    <div className='note-display'>
                        {this.state.currentNoteIndex === -1 ? <div className='note'></div> : <Note className='note' index={this.state.currentNoteIndex}title={this.state.notes[this.state.currentNoteIndex].title} text={this.state.notes[this.state.currentNoteIndex].text} onUpdateNote={this.onUpdateNote}></Note>}
                    </div>
                </div>
            </div>
        )
    }
}
