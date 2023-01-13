import SERVER from '../constants/server'

const fetchTengeToRubleRate = async (): Promise<number> => {
  const cbRatesResponse = await fetch(SERVER.URL + 'cb_rates')
  const data = await cbRatesResponse.json()

  const parser = new DOMParser()
  const ratesElements = parser
    .parseFromString(data, 'text/xml')
    .getElementsByTagName('Valute')

  let nominal = 0
  let rate = 0

  for (let i = 0; i < ratesElements.length; i++) {
    if (ratesElements[i].attributes['ID'].value === 'R01335') {
      const rateElement = ratesElements[i]
      nominal = parseInt(rateElement.childNodes[2].textContent ?? '0')
      rate = parseInt(rateElement.childNodes[4].textContent ?? '0')
    }
  }
  return nominal / rate
}

export default fetchTengeToRubleRate
