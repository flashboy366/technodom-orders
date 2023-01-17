const generateOperatorEmailMessage = ({
  userInfo,
  addressDelivery,
  orderProducts,
}) => `      

ФИО: ${userInfo.name}
Номер телефона: ${userInfo.phoneNumber}
Электронная почта: ${userInfo.email}
Населенный пункт: ${userInfo.location.title}

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
      Наименование: ${product.title}, Артикул: ${product.article}, Количество: ${product.quantity}, Цена: ${product.productData.productPriceInTenge} т. , ${product.productData.productPriceInRubles} р.`
)}

Итого: ${orderProducts.totalPriceInTenge} т. , ${orderProducts.totalPriceInRubles} р.

`

module.exports = generateOperatorEmailMessage
