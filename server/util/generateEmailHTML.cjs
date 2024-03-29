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
</head>
<body>
<pre>
${
  recipientType === 'operator'
    ? `
<h4>
Заявка на заказ
</h4>
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
<h4>
Заявка принята
</h4>
Мы рады сообщить, что мы приняли Вашу заявку и уже работаем с ней! В ближайшее время с Вами свяжется менеджер по мобильной связи, либо посредством мессенджеров (WhatsApp, Вайбер, Telegram) с нашего контактного номера +7-922-702-20-35 для подтверждения Заказа и уточнения сроков доставки.
`
}
<p style='font-weight: 600'>
Товары:
</p>
<table style='width: 80%'>
<tr>
<th style='width: 40%'>Наименование</th>
<th style=''>Изображение</th>
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
<td style='text-align: center'>
<img src='${product.productData.productImgUrl}' alt=''>
</td>
<td style='text-align: center'>
${product.quantity}
</td>
<td>
${
  recipientType === 'operator'
    ? `
${product.productData.productPriceInTenge} т.
${product.productData.productPriceInRubles} р.
`
    : `
${product.productData.productPriceInRubles} р.
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
<td style='border-width: 0'></td>
<td>
${orderProducts.products.length} товар(ов)
</td>
<td>
${
  recipientType === 'operator'
    ? `
${orderProducts.totalPriceInTenge} т.
${orderProducts.totalPriceInRubles} р.
`
    : `
${orderProducts.totalPriceInRubles} р.
`
}
</td>
</tr>
</table>
${
  recipientType === 'user'
    ? `
<h4>Наши контакты:</h4>
Тел.:  +79227022035
E-mail: dostavim.kz@mail.ru
Сайт: https://dostavimkz.ru/
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
