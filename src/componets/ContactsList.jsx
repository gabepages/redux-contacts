import React from "react"
import { connect } from "react-redux"


const ContactsList = ({ contacts }) =>
    <ul>
      {contacts.map(contact => <li key={contact}>{contact}</li>)}
    </ul>



export default connect(state => ({
  contacts: state.contacts
}))(ContactsList)
