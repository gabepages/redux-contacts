import React, { Component } from "react"
import { connect } from "react-redux"
import { addContact as _addContact } from  "../state/actions/addContact"


class EditContacts extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }
  render() {
    return(
      <div className="col s12 m4">
        <h5>Add Contacts:</h5>
        <form onSubmit={this.handleContact.bind(this)} >
          <div className="input-field">
            <input type='text' id='add-contact' placeholder='Name:' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
          </div>
          <input type='submit' value="Add Contact" className='btn' />
        </form>
      </div>
    )
  }
  handleContact(e) {
    e.preventDefault()
    const { addContact } = this.props
    const { name } = this.state
    let GUID = this.guid()
    addContact({GUID, name})
    this.setState({name: ''})
  }
  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}

export default connect(
  undefined, {
    addContact: _addContact
  }
)(EditContacts)
