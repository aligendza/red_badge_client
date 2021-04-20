let APIURL: string = ''

switch (window.location.hostname) {
    case 'localhost'|| '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
    case 'eventual heroku app':
        APIURL = ''
}

export default APIURL