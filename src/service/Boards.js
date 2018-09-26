import Api from './Api'

export default {
  getAllBoards () {
    return Api.get('boards')
  },
  createBoard (data) {
    return Api.post('boards', data)
  },
  savePin (id, data) {
    return Api.post(`boards/${id}/pins`, data)
  },
  getPins (id) {
    return Api.get(`boards/${id}/pins`)
  }
}
