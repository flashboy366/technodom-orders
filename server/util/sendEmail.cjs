const nodemailer = require('nodemailer')
const EMAIL = require('../config/email.cjs')

const transporter = nodemailer.createTransport({
  service: EMAIL.SERVICE,
  auth: {
    user: EMAIL.USER,
    pass: EMAIL.PASS,
  },
})

const sendEmail = async emailMessage => {
  const mailOptions = {
    from: EMAIL.USER,
    to: EMAIL.TO,
    subject: 'Заявка на заказ',
    text: emailMessage,
  }

  return await transporter.sendMail(mailOptions, function (error) {
    return !error
  })
}

module.exports = sendEmail
