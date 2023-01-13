const express = require('express')
const cors = require('cors')
const constants = require('./constants.js')
const generateEmailMessage = require('./util/generateEmailMessage.js')
const sendEmail = require('./util/nodemailer')

const app = express()

app.use(cors())
app.use(express.json())

app
  .get('/product_data', (req, res) => {
    fetch(constants.PRODUCT_URL + req.query.productArticle)
      .then(function (response) {
        return response.text()
      })
      .then(function (string) {
        res.json(string)
        res.end()
      })
  })
  .get('/cb_rates', (req, res) => {
    fetch(constants.CB_RATES_URL)
      .then(response => {
        return response.text()
      })
      .then(string => {
        res.json(string)
        res.end()
      })
  })
  .post('/mail_request', (req, res) => {
    try {
      const emailMessageJSON = req.query

      const userInfo = JSON.parse(emailMessageJSON.userInfo)
      let addressDelivery
      emailMessageJSON.addressDelivery !== 'undefined'
        ? (addressDelivery = JSON.parse(emailMessageJSON.addressDelivery))
        : (addressDelivery = false)
      const orderProducts = JSON.parse(emailMessageJSON.orderProducts)

      const emailMessage = generateEmailMessage({
        userInfo,
        addressDelivery,
        orderProducts,
      })

      sendEmail(emailMessage).then(result => {
        if (result) {
          res.statusCode = 200
        } else res.statusCode = 500
      })
    } catch (err) {
      res.statusCode = 500
      console.log(err)
    }
    res.end()
  })

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`)
})

module.exports = app
