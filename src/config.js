/**
 * Created by maizifeng on 6/9/16.
 */

export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'http://api.xxx.com/'
  : 'http://localhost:3000/'

export const API_BAKEND = (process.env.NODE_ENV === 'production')
  ? 'http://api.xxx.com/'
  : 'http://localhost:8080/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? '.xxx.com'
  : ''
