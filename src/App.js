import React, { Component } from 'react'
import './App.css'
import macBg from './mac-os-bg.jpg'
import Editor from './components/Editor/Editor.js'
import Preview from './components/Markdown_Preview/Markdown_Preview.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: ''
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

const Header = () =>
  <div className='header'>
    <ul>
      <li className='mac-btn'></li>
      <li className='mac-btn'></li>
      <li className='mac-btn'></li>
    </ul>
    <span>
      Markdown Previewer - <a href='http://sanatan.gq'>Sanatan</a>
    </span>
  </div>
export default App
