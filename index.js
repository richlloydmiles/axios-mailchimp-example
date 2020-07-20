
const axios = require('axios')

axios.get('https://us12.api.mailchimp.com/3.0/', {
    headers: {
      'Authorization': `Basic ${user}`
    }
}).then((r) => console.log('success: ', r))
    .catch((e) => console.log('fail: ', e))

