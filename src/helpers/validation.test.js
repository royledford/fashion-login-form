// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
import { emailValid, passwordValid, passwordConfirmValid } from './validation'

describe('Email validation', () => {
  it('finds valid emails', () => {
    expect(emailValid('name@example.com').valid).toBeTruthy()
  })

  it('finds INvalid emails', () => {
    expect(emailValid('nameexample.com').valid).toBeFalsy()
  })

  it('finds INvalid emails', () => {
    expect(emailValid('name@example').valid).toBeFalsy()
  })
})

describe('Password validation', () => {
  it('password "Password" is valid', () => {
    expect(passwordValid('Password').valid).toBeTruthy()
  })
  it('password "inTheMiddle"is  valid', () => {
    expect(passwordValid('inTheMiddle').valid).toBeTruthy()
  })

  it('password "password" is NOT valid', () => {
    expect(passwordValid('password').valid).toBeFalsy()
  })
  it('password "12345678" is NOT valid', () => {
    expect(passwordValid('12345678').valid).toBeFalsy()
  })
  it('password "1" is NOT valid', () => {
    expect(passwordValid('1').valid).toBeFalsy()
  })
  it('password "" is NOT valid', () => {
    expect(passwordValid('').valid).toBeFalsy()
  })
})

describe('Password confirmation', () => {
  it('passwords match', () => {
    expect(passwordConfirmValid('1', '1')).toBeTruthy()
  })

  it('passwords do not match', () => {
    expect(passwordConfirmValid('1', 'a')).toBeFalsy()
  })

  it('passwords can not be empty strings', () => {
    expect(passwordConfirmValid('', 'a')).toBeFalsy()
  })

  it('confirms can not be empty strings', () => {
    expect(passwordConfirmValid('a', '')).toBeFalsy()
  })
})
