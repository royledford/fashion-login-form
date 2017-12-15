// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
import { emailValid, passwordValid, passwordConfirmValid } from './validation'

describe('Email validation', () => {
  it('finds valid emails', () => {
    expect(emailValid('name@example.com')).toBeTruthy()
  })

  it('finds INvalid emails', () => {
    expect(emailValid('nameexample.com')).toBeFalsy()
  })

  it('finds INvalid emails', () => {
    expect(emailValid('name@example')).toBeFalsy()
  })
})

describe('Password validation', () => {
  it('password is valid', () => {
    expect(passwordValid('12345678')).toBeTruthy()
  })

  it('password is NOT valid', () => {
    expect(passwordValid('1')).toBeFalsy()
  })

  it('password is NOT valid', () => {
    expect(passwordValid('')).toBeFalsy()
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
