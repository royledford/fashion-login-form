export const emailValid = email => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // eslint-disable-line no-useless-escape
  if (regEx.test(email)) {
    return { valid: true }
  }
  return {
    valid: false,
    message: "Sorry, that doesn't look like an email address (Hint...It should look like 'example@email.com')",
  }
}

export const passwordValid = password => {
  // Must have an upper case letter
  // Must have a lower case letter
  // Must have at least 8 charaters
  // cannot be all numbers.
  const regEx = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(^.{8,})/
  if (regEx.test(password)) {
    return {
      valid: true,
    }
  }

  return {
    valid: false,
    message: 'Passwords must have at least 1 uppercase and 1 lowercase letter, and must be at least 8 characters.',
  }
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
