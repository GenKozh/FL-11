$(document).ready(function() { 
  $(".js-user-profile-submit").on('submit', function(e) {
      e.preventDefault();
      let inputElem = $(".js-user-profile-submit input[name$='phone']"); 
      let oldValue = inputElem.val();
      let newValue;
      if (/^\d+$/.test(oldValue)) {
        newValue = '+' + oldValue;
        inputElem.val(newValue);
      }
      this.submit();
  });
}); 