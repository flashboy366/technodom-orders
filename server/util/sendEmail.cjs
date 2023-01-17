const nodemailer = require('nodemailer')
const EMAIL = require('../config/email.cjs')

const transporter = nodemailer.createTransport({
  service: EMAIL.SERVICE,
  auth: {
    user: EMAIL.USER,
    pass: EMAIL.PASS,
  },
})

const sendEmail = async ({ message: message, subject: subject, recipient: recipient }) => {
  const mailOptions = {
    from: EMAIL.USER,
    to: recipient,
    subject: subject,
    text: message,
  }

  return await transporter.sendMail(mailOptions, function (error) {
    return !error
  })
}

module.exports = sendEmail
