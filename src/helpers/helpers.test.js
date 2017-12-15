// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
import {
  getFirstEmailError,
  getFirstPasswordError,
  capitalizeFirstLetter,
  formatErrorMessage,
  getEmailName,
  getInitials,
} from './helpers'

describe('Get email error', () => {
  const error = {
    email: ['error 1', 'error 2'],
  }
  const errorEmpty = {}

  it('finds the first error message', () => {
    expect(getFirstEmailError(error)).toBe('error 1')
  })

  it('handles empty errors', () => {
    expect(getFirstEmailError(errorEmpty)).toBe('')
  })
})

describe('Get password error', () => {
  const error = {
    password: ['error 1', 'error 2'],
  }
  const errorEmpty = {}

  it('finds the first error message', () => {
    expect(getFirstPasswordError(error)).toBe('error 1')
  })

  it('handles empty errors', () => {
    expect(getFirstPasswordError(errorEmpty)).toBe('')
  })
})

it('Capitalizes the first letter in a string', () => {
  expect(capitalizeFirstLetter('star wars')).toBe('Star wars')
})

it('Formats formats an error message', () => {
  expect(formatErrorMessage('email', "can't be blank")).toBe("Email can't be blank.")
})

describe('Get name from email (up to @)', () => {
  it('gets the name', () => {
    expect(getEmailName('luke@starwars.com')).toBe('luke')
  })
  it('fails well', () => {
    expect(getEmailName('lukestarwars.com')).toBe('')
  })
})

it('Gets the initials from a string of names', () => {
  expect(getInitials('darth yoda luke ben kenobi')).toBe('DYLBK')
})
