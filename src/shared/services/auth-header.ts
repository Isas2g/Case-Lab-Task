export const authHeader = () => {
  let token = localStorage.getItem('token')

  if (token === null) token = ''

  return { 'x-api-key': token }
}
