import React, { Component } from 'react'
import s from './Form.module.css'
import { nanoid } from 'nanoid'

export class Form extends Component {
  state = {
    name: '',
    number: ''
  }

  nameInputId = nanoid()
  numberInputId = nanoid()

  handleChange = e => {
    const { name, value } = e.currentTarget

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state)

    this.reset()
  }

  reset = () => {
    this.setState({ name: '', number: '' })
  }

  render() {
    return (
      <form className={s['form']} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={s['label']}>
          <p>Name</p>
          <input
          className={s['input']}
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder='Petro Ivanov'
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </label>

        <label htmlFor={this.numberInputId} className={s['label']}>
          <p>Number</p>
          <input
            className={s['input']}
            onChange={this.handleChange}
            type="tel"
            name="number"
            placeholder='+380-38-038-03-80'
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={s['button']}>
          Add contact
        </button>
      </form>
      
    )
  }
}