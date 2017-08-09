import React from 'react'
import marked from 'marked'
import './Markdown_Preview.css'

const Preview = ({markdown}) =>
  <div
    className='preview'>
    <div dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
 </div>

export default Preview
