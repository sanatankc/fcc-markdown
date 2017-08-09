import React, { Component } from 'react'
import './App.css'
import macBg from './mac-os-bg.jpg'
import Editor from './components/Editor/Editor.js'
import Preview from './components/Markdown_Preview/Markdown_Preview.js'
import Header from './components/Header/Header.js'
import default_markdown from './default_markdown.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: default_markdown
    }

    this.onEditorChange = this.onEditorChange.bind(this)
  }
  onEditorChange(value) {
    this.setState({value})
  }

  render() {
    return (
      <div className='body' style={{background: `url(${macBg})`}}>
        <div className='app'>
          <Header/>
          <Editor onChange={this.onEditorChange} value={this.state.value}/>
          <Preview markdown={this.state.value}/>
        </div>
      </div>
    )
  }
}

export default App
