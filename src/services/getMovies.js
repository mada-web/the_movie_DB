import { request } from './api'

export const getMovies = (type, page) =>
  request(`/${type}/popular?page=${page}`)

export const getMovieCast = (type, id) => request(`/${type}/${id}/credits`)

export const getMovieById = (type, id) => request(`/${type}/${id}`)

export const searchMovie = (search) => request(`/movie?search=${search}`)
