let UploaderWindow = require('@webutils/uploader');

UploaderWindow('your-api-key').open()
    .then(urls => urls && urls.length > 0 ? alert(urls[0].url) : alert('none'))
    .catch(e => console.error("error: ", e));