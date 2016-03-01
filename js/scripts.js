var palindrome = function(str) {
  var initial = str;
  var replaced = str.split('')
  replaced = replaced.filter(function(str) {
    return /\S/.test(str);
});
  var result = replaced.reverse().join().replace( /,/g, "" );

  if (result === initial) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("form#rate").submit(function(event) {
    var str = $("input#text").val();

    var result = palindrome(str);

    $("#truthy").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
