import SERVER from '../constants/server'

const fetchTengeToRubleRate = async (): Promise<number> => {
  const cbRatesResponse = await fetch(SERVER.URL + 'cb_rates')
  const data = await cbRatesResponse.json()

  const parser = new DOMParser()
  const rates = parser.parseFromString(data, 'application/xml')

  return parseInt(
    parser
      .parseFromString(rates.activeElement!.innerHTML, 'text/html')
      .getElementById('R01335')
      ?.getElementsByTagName('Value')[0].textContent ?? ''
  )
}

export default fetchTengeToRubleRate
