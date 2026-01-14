export const API_BASE_URL = 'https://fakestoreapi.com'

export const buildApiUrl = (path: string) =>
  `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`


