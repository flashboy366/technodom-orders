const financial = require('../config/financial.cjs')

const generateEmailHTML = ({
  userInfo,
  addressDelivery,
  orderProducts,
  recipientType,
}) => `
<html lang='ru'>
<head>
<style>

table {border-collapse: collapse}
tr, td, th {border: 1px solid}
td, th {padding: 10px}
img {height: 150px; width: 150px; object-fit: contain;}


</style>
<title>Заказ</title>
</head>
<body>
<pre>
${
  recipientType === 'operator'
    ? `
<h2>
Заявка на заказ
</h2>
ФИО: ${userInfo.name}
Номер телефона: ${userInfo.phoneNumber}
Электронная почта: ${userInfo.email}
Населенный пункт: ${userInfo.location.label}
Доставка до адреса: ${
        !addressDelivery
          ? 'не требуется'
          : `
      Улица: ${addressDelivery.street}
      Дом: ${addressDelivery.house}
      Контакты на выгрузке: ${addressDelivery.contacts} 
      Номер телефона: ${addressDelivery.phoneNumber}
      Комментарий: ${addressDelivery.comment}
`
      }
`
    : `
<h2>
Заявка принята
</h2>
Мы рады сообщить, что мы приняли Вашу заявку и уже работаем с ней! В ближайшее время с Вами свяжется менеджер по мобильной связи, либо посредством мессенджеров (WhatsApp, Вайбер, Telegram) с нашего контактного номера +7-922-702-20-35 для подтверждения Заказа и уточнения сроков доставки.
`
}
<p style='font-weight: 600'>
Товары:
</p>
<table style='width: 80%'>
<tr>
<th style='width: 40%'>Наименование</th>
<th style=''>Количество</th>
<th style=''>Цена</th>
</tr>
${orderProducts.products
  .map(
    product => `
<tr>
<td>
<a href='${product.productURL}'>
${product.productData.productTitle}
</a>
</td>
</td>
<td style='text-align: center'>
${product.quantity}
</td>
<td>
${
  recipientType === 'operator'
    ? `
${
  product.productData.productPriceInTenge *
  financial.EXTRA_CHARGE_COEFFICIENT *
  product.quantity
} т.
${
  product.productData.productPriceInRubles *
  financial.EXTRA_CHARGE_COEFFICIENT *
  product.quantity
} р.
`
    : `
${
  product.productData.productPriceInRubles *
  financial.EXTRA_CHARGE_COEFFICIENT *
  product.quantity
} р.
`
}
</td>
</tr>
`
  )
  .join('')}
<tr>
<td style='border-width: 0'>
Итого:
</td>
<td>
${orderProducts.products.length} товар(ов)
</td>
<td>
${
  recipientType === 'operator'
    ? `
${orderProducts.productsPricesSumInTengeWithCharge} т.
${orderProducts.productsPricesSumInRublesWithCharge} р.
`
    : `
${orderProducts.productsPricesSumInRublesWithCharge} р.
`
}
</td>
</tr>
</table>
${
  recipientType === 'user'
    ? `
<h4>Оплата</h4>
Для оплаты сканируйте QR код ниже или воспользуйтесь ссылкой:
<a href='https://qr.nspk.ru/AS1A001U45RFI2IJ8TN820SSVNPSS55G?type=01&bank=100000000065&crc=18D6'>https://qr.nspk.ru/AS1A001U45RFI2IJ8TN820SSVNPSS55G?type=01&bank=100000000065&crc=18D6</a>
<img alt='QR_code' src='https://iherb174.ru/payment_services/qr-payment.png' style='height:350px; width:350px'/>
<h4>Наши контакты:</h4>
Тел.:  +79227022035
E-mail: Iherb174@yandex.ru
Сайт: <a href='https://iherb174.ru/'>iHerb174.ru</a>
<span style='font-size: smaller'>
*Стоимость товаров указана с учетом сервисного сбора!
В сервисный сбор входят услуги по выкупу товара у поставщиков, его приему и осмотру, конвертация денежных средств, доставка до центрально терминала по выбору покупателя (Города: Астана, Костанай и Челябинск). Стоимость доставки до конкретного адреса Вам сообщит менеджер при подтверждении Заказа. В случае доставки до Вашего адреса, необходимо оплатить стоимость доставки и сервисный сбор в размере 15%, который учтен в стоимости Заказа. В случае отказа от приобретения товара при отсутствии видимых повреждений и некомплектности, сервисный сбор и оплата доставки до адреса не возвращаются. 
</span>
`
    : ''
}
</pre>
</body>
</html>
`

module.exports = generateEmailHTML
