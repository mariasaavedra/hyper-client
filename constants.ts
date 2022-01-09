const BASE_URL = process.env.NODE_ENV === 'development' ?
"http://api.digitalbytes.com:1337/api": 
"https://hyper-genius-api.herokuapp.com/api"

export default BASE_URL;