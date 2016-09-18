/**
 * Created by Administrator on 2016/9/18.
 */
import createLogger from 'vuex/logger'

export default process.env.NODE_ENV !== 'production' ? [createLogger()] : []
