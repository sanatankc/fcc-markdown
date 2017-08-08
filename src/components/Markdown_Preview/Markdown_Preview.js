import React from 'react'
import marked from 'marked'

const Preview = ({markdown}) =>
  <div className='preview'
       dangerouslySetInnerHTML={{__html: marked(markdown)}}>    
 </div>

export default Preview
