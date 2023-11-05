
  window.fbAsyncInit = function() {
      FB.init({
       appId            : '1661249877709739',
       autoLogAppEvents : true,
       xfbml            : true,
       version          : 'v17.0'
     });
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
          console.log("Haha here is the user info");
          console.log(response)
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };
