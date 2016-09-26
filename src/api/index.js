import {UserResource} from './resources'

export default {
  localLogin: function (data) {
    return UserResource.save(data)
  }
}
