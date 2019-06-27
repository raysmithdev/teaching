import React from 'react'

function AddTodo(props) {
  return (
    <form onSubmit={event => {
      event.preventDefault()

      let userInput = event.target.userInput.value

      props.handleSubmit(userInput)

      event.target.userInput.value = ''
    }}>
      <input type="text" name="userInput"/>
      <button>Submit</button>
    </form>
  )
}

export default AddTodo
