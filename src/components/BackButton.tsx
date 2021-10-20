import React from 'react'
import { useHistory} from 'react-router-dom'

export const BackButton = () => {
  const history = useHistory()
  function handleClick() {
    history.push('/home')
  }
  return (
    <button onClick={handleClick}>Back to calendar</button>
  )
}