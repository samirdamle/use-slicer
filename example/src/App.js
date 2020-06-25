import React from 'react'

import { useSlicer } from 'use-slicer'

const App = () => {
  const example = useSlicer()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
