//-------------------------------------------------------------------------
// Format the JSON error messages that are return form AuthService
// to indvidual strings that can be displayed in a form control
//-------------------------------------------------------------------------
// export const formatErrors = errors => {
//   let fullString = ''
//   errors = JSON.parse(errors)

//   for (var errorField in errors.errors) {
//     errors.errors[errorField].forEach(function(element) {
//       // eslint-disable-line no-loop-func
//       fullString += formatErrorMessage(errorField, element)
//     })
//   }

//   return fullString
// }

//-------------------------------------------------------------------------
// Get the first email error from an error object
//-------------------------------------------------------------------------
export const getFirstEmailError = errorObject => {
  if (errorObject.hasOwnProperty('email')) {
    return errorObject.email[0]
  } else {
    return ''
  }
}

//-------------------------------------------------------------------------
// Get the first password error from an error object
//-------------------------------------------------------------------------
export const getFirstPasswordError = errorObject => {
  if (errorObject.hasOwnProperty('password')) {
    return errorObject.password[0]
  } else {
    return ''
  }
}

//-------------------------------------------------------------------------
// Format the indvidual error message from AuthService into an
// single prettified string
//-------------------------------------------------------------------------
export const formatErrorMessage = (errorType, errorMessage) => {
  return capitalizeFirstLetter(errorType) + ' ' + errorMessage + '. '.trim()
}

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1).trim()
}

//-------------------------------------------------------------------------
// Get the beginning of an email (characters before @)
//-------------------------------------------------------------------------
export const getEmailName = email => {
  return email.substring(0, email.indexOf('@'))
}

//-------------------------------------------------------------------------
// Convert a string of names into initials
//-------------------------------------------------------------------------
export const getInitials = name => {
  if (name && typeof name === 'string') {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  } else {
    return undefined
  }
}

// randomDate(new Date(2012, 0, 1), new Date())
export const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
