export async function fetchData () {
  try {
    const response = await fetch('https://64e66ab909e64530d17ffb2c.mockapi.io/ictures')
    return await response.json()
  } catch (err) {
    return console.log(err)
  }
}
