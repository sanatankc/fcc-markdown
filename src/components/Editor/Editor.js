import React from 'react'

import AceEditor from 'react-ace'
import 'brace/mode/markdown'
import 'brace/theme/cobalt'

const Editor = ({onChange, value}) =>
  <div className='editor'>
    <AceEditor
      mode='markdown'
      theme='cobalt'
      width= 'calc(50vw - 100px)'
      height = 'calc(100vh - 220px)'
      fontSize = {24}
      value = {value}
      onChange= {(value, event) => onChange(value)} />
  </div>

export default Editor
