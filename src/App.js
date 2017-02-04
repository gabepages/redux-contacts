import React from 'react'
import './App.css'

import ContactsList from "./componets/ContactsList"
import EditContacts from "./componets/EditContacts"

const App = () =>
  <div className="App container">
    <div className='row'>
      <EditContacts/>
      <ContactsList/>
    </div>
  </div>



export default App
