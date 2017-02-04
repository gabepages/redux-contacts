import React, { Component } from "react"
import { connect } from "react-redux"
import { deleteContact as _deleteContact } from  "../state/actions/deleteContact"

class ContactsList extends Component {
  render() {
    return(
      <div className="col s12 m8">
        <h5>Contacts:</h5>
        <ul>
          {this.props.contacts.map(contact => {
            return (
              <li key={contact.GUID} className='chip' style={{fontSize: 18 + "px"}}>
                {contact.name}
                <i onClick={this.deleteContact.bind(this, contact)} className="material-icons"  style={{verticalAlign: "middle", cursor: "pointer"}}>close</i>
              </li>
            )
          })}
        </ul>
      </div>

    )
  }
  deleteContact(contact){
    this.props.deleteContact(contact)
  }
}




export default connect(state => ({
  contacts: state.contacts
}),{
  deleteContact: _deleteContact
}
)(ContactsList)
