import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import ContactList from './ContactList'
import Container from './Container'
import Filter from './Filter'
import { Form } from './Form'
import Section from './Section'
import Notiflix from 'notiflix'

export class App extends Component {
  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== id
      )}))
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state

    const contact = {
      id: nanoid(),
      name,
      number
    }

    const hasName = contacts.find(
      contact => 
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    )

    hasName ? Notiflix.Notify.failure(`${name} is already in contacts.`)
      : this.setState(({contacts}) => ({
          contacts: [contact, ...contacts]
        }))
  }

  onFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

 

  render() {
    const { filter, contacts } = this.state
    const contactsFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    return (
      <Container>
        <Section title='Phonebook'>
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title='Contacts'>
          <Filter value={filter} onChange={this.onFilterInput}/>
          <ContactList contacts={contactsFilter} onDeleteContact={this.deleteContact}/>
        </Section>
      </Container>
    )
  }
}