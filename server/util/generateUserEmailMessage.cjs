const generateUserEmailMessage = ({
  userInfo,
  addressDelivery,
  orderProducts,
}) => `      

Ваша заявка принята!

В ближайшее время с Вами свяжется менеджер для уточнения Заявки, после чего Вам прийдет подтверждение Заказа с номером!

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
  
Товары: ${orderProducts.products.map(
  product => `
      Наименование: ${product.productData.productTitle}, Артикул: ${product.article}, Количество: ${product.quantity}, Цена: ${product.productData.productPriceInRubles} р.`
  
)}

Итого: ${orderProducts.totalPriceInRubles} р.

`

module.exports = generateUserEmailMessage
