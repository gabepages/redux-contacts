import React, { Component } from "react"
import { connect } from "react-redux"
import { addContact as _addContact } from  "../state/actions/contact"


class EditContacts extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }
  render() {
    return(
      <div>
        <div>
          <input type='' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
        </div>
        <div>
          <button type='submit' onClick={this.handleContact.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
  handleContact(e) {
    e.preventDefault()
    const { addContact } = this.props
    const { name } = this.state
    addContact(name)
    this.setState({name: ''})
  }
}

export default connect(
  undefined, {
    addContact: _addContact
  }
)(EditContacts)
