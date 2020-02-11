 //var apiUrl='http://localhost:1337/';
//var apiUrl='http://web-sokar.herokuapp.com/';
function cancel(url)
{
    window.location.href=webUrl+url
}

function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}