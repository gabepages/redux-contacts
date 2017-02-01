import React from 'react'
import './App.css'

import ContactsList from "./componets/ContactsList"
import EditContacts from "./componets/EditContacts"

const App = () =>
  <div className="App">
    <EditContacts/>
    <ContactsList/>
  </div>



export default App
