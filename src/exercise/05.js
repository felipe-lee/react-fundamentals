// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className = '', style, ...otherProps}) => {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>Things</Box>
    </div>
  )
}

export default App
