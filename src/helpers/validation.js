export const emailValid = email => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // eslint-disable-line no-useless-escape
  return regEx.test(email)
}

export const getEmailErrorMsg = email => {
  if (emailValid(email)) {
    return ''
  } else {
    return 'Please enter a valid email'
  }
}

export const passwordValid = password => {
  return password.length >= 8
}

export const getPasswordErrorMsg = password => {
  if (passwordValid(password)) {
    return ''
  } else {
    return 'Passwords must be at least 8 characters'
  }
}

export const passwordConfirmValid = (password, confirm) => {
  return password !== '' && password === confirm
}

export const getPasswordConfirmErrorMsg = (password, confirm) => {
  if (passwordConfirmValid(password, confirm)) {
    return ''
  } else {
    return 'Passwords must match'
  }
}
