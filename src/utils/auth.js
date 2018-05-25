const ApiKey = 'api-key'

export function getToken () {
  return localStorage.getItem(ApiKey)
}
