const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'mail.ru',
  auth: {
    user: 'vm_logistika@mail.ru',
    pass: 'logistika_22',
  },
})

const sendEmail = async emailMessage => {
  const mailOptions = {
    from: 'vm_logistika@mail.ru',
    to: 'vm_logistika@mail.ru',
    subject: 'Заявка на заказ',
    text: emailMessage,
  }

  return await transporter.sendMail(mailOptions, function (error) {
    return !error
  })
}

module.exports = sendEmail
