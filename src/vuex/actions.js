/**
 * Created by Administrator on 2016/9/26.
 */
import api from '../api'



export const localLogin = (store, userInfo) => {
  api.localLogin(userInfo).then(response => {
    if (!response.ok) {
    }

    store.router.go('/main')
  }, response => {

  })
}
