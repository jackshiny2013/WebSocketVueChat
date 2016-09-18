/**
 * Created by Administrator on 2016/9/18.
 */

export const API_ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://api.xxx.com/'
    : 'http://www.syaits.com:3000/'

export const API_BAKEND = (process.env.NODE_ENV === 'production')
    ? 'http://api.xxx.com/'
    : 'http://localhost:8080/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
    ? '.xxx.com'
    : ''
