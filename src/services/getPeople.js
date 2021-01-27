import { request } from './api'

export const getPeople = (type, page) =>
  request(`/${type}/popular?page=${page}`)

export const getPerson = (id) => request(`/person/${id}?`)

export const getCast = (id) => request(`/discover/movie?with_cast=${id}`)
