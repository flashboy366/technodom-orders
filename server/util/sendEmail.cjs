const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'yandex',
  auth: {
    user: 'platonovk1998@ya.ru',
    pass: '1UzP1z',
  },
})

const sendEmail = async emailMessage => {
  const mailOptions = {
    from: 'platonovk1998@ya.ru',
    to: 'flashboy366@ya.ru',
    subject: 'Заявка на заказ',
    text: emailMessage,
  }

  return await transporter.sendMail(mailOptions, function (error) {
    return !error
  })
}

module.exports = sendEmail
