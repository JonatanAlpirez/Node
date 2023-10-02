const odenarArray = (array) => {
  const n = array.length
  let swapped

  do {
    swapped = false
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Intercambiar elementos si están en el orden incorrecto
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
  } while (swapped)

  return array
}

console.log(odenarArray([3, 8, 1, 5, 7]))

module.exports = {
  odenarArray
}
