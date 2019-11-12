const text = baffle('.baffle');
text.set({
  characters: '!/|~#.^+*$#%nwf',
  speed: 150
});
text.start();
text.reveal(2000);



function generatePassword() {
    var length = $('#selLength').val(), 
    charset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    result = ""; 
        
    for (var i = 0, n = charset.length; i < length; ++i) {
        result += charset.charAt(Math.floor(Math.random() * n));
    }
  
    return result;
    }

function getNewPassword() {
    $('#pass').text(generatePassword());
}    

$(document).ready(function () {
    getNewPassword();
    
    $('button').click(function () {
        getNewPassword();
        $(this).text('Try Another');
        return false;
    });
});