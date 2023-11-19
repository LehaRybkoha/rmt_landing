export function formatPhone(str: string): string {
  return str.replace(/\s/g, '').replace(/-/g, '').replace(/[\(\)]/g, '')
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  }).format(price)
}

export function formatNumber(price: number) {
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
  }).format(price)
}

export function formatAddress(street: string, house: string, city?: string) {
  return [
    city && `${city}`,
    street && `ул ${street}`,
    house && `д ${house}`,
  ].filter(Boolean).join(', ')
}

export function formatHouse(house: string, block_type: string, block: string) {
  return [
    house,
    block_type && block_type,
    block && block,
  ].filter(Boolean).join(' ')
}

export function addBuildingInfo(address: string, apartment: string, porch: string, floor: string) {
  return [
    address,
    apartment && `кв. ${apartment}`,
    porch && `${porch} подъезд`,
    floor && `${floor} этаж`,
  ].filter(Boolean).join(', ')
}

export function formatCard(cardNumber: string) {
  return cardNumber.slice(cardNumber.length - 4, cardNumber.length)
}

export function formatDate(dateString: string) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ]

  const date = new Date(dateString)

  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export function daysInMonth(date: Date) {
  return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate()
}

export function wordInflection(quantity: number, names: string[]) {
  const n = Math.abs(quantity) % 100
  const n1 = n % 10

  if (n > 10 && n < 20)
    return names[2] || names[1]
  if (n1 > 1 && n1 < 5)
    return names[1]
  if (n1 === 1)
    return names[0]
  return names[2] || names[1]
}
