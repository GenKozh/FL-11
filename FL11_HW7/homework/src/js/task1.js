const MAX_LENGTH = 6;
const MAX_NEW_LENGTH = 5;

let passwordList = {
  'user@gmail.com': 'UserPass',
  'admin@gmail.com': 'AdminPass'
}

let email = prompt('Please enter your email:');

if (!email) {
  alert('Canceled.');

} else if (email.length < MAX_LENGTH) {
  alert('I don\'t know any emails having name length less than 6 symbols')
  
  } else if (!(email === 'user@gmail.com' || email === 'admin@gmail.com')) {
    alert('I don\'t know you')

  } else {
    let password = prompt('Please enter your password:');
    if (!password) {
    alert('Canceled.');
  
  } else if (!(passwordList[email] === password)) {
    alert('Wrong password');
  
  } else {
    let answer = confirm('Do you want to change your password?');
    if (!answer) {
      alert('You have failed the change');

    } else {
      let oldPassword = prompt('Please enter the old password:');
      if (!oldPassword) {
      alert('Canceled.');

    } else if (!(passwordList[email] === oldPassword)) {
      alert('Wrong old password');

    } else {
      let newPasswordFirst = prompt('Please enter the new password:');
        if (!newPasswordFirst) {
          alert('Canceled.');

        } else if (newPasswordFirst.length < MAX_NEW_LENGTH) {
          alert('It\'s too short password. Sorry.')
          
        } else {
          let newPasswordSecond = prompt('Please re-enter the new password:');
          if (!newPasswordSecond) {
            alert('Canceled.');

          } else if (newPasswordFirst !== newPasswordSecond) {
            alert('You wrote the wrong password');

          } else {
            passwordList[email] = newPasswordSecond;
            alert('You have successfully changed your password.');
          }
        }
      }
    }
  } 
}