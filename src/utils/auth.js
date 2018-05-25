const ApiKey = 'api-key'

export function getToken () {
  return localStorage.getItem(ApiKey)
}
export function setToken (token) {
  return localStorage.setItem(ApiKey, token)
}
export function removeToken () {
  return localStorage.removeItem(ApiKey)
}
