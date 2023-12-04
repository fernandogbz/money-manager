export const generateId = () => {
  const random = Math.random().toString(36).substr(2); // generates a random id with letters and numbers
  const date = Date.now().toString(36); // generates a random id using parts of the numbers of the date, turning some of them to strings

  return random + date; // Add up random and date to get an even stronger and unique id
}