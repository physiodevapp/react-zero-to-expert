
const moment = require('moment')

const isDate = (value) => {
<<<<<<< HEAD
=======
  // console.log(value)
>>>>>>> e634fcf328acf21c4d98025a81a6e4c7f48bf3df

  if (!value) {
    return false
  }

  const date = moment(value)
  if (date.isValid()) {
    return true
  } else {
    return false
  }
}

module.exports = {
  isDate
}