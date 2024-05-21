export function twoDecimalFloat(value) {
  if (typeof value === 'string') {
      value = parseFloat(value);
  }
  if (isNaN(value)) {
      throw new Error('Invalid input');
  }
  return Math.round(value * 100) / 100;
}

export function formatDateToSpanish(dateString) {
  const date = new Date(dateString);

  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const dayName = dayNames[date.getUTCDay()];
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${dayName}, ${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
}