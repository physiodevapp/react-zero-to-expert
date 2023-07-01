const mongoose = require('mongoose')

const dbConnection = async() => {

  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected successfully to DB')
  } catch (error) {
    console.log(error)
    throw new Error('An error ocurred while trying to connect to DB')
  }

}

module.exports = dbConnection