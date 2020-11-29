import instance from './instance'
import api from './index'

const roomList = () => {
  return instance({
    url: api.room.list,
    method:'get'
  })
}

const addRoom = (data) => {
  return instance({
    url: api.room.add,
    method:'post',
    data: data
  })
}

const closeRoom = (roomId) => {
  return instance({
    url: api.room.close.replace('{}', roomId),
    method: 'post'
  })
}

const startRoom = (roomId) => {
  return instance({
    url: api.room.start.replace('{}', roomId),
    method: 'post'
  })
}

export default {
  roomList,
  addRoom,
  closeRoom,
  startRoom
}
