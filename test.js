$.ajax({
  method: 'GET',
  url: 'https://picsum.photos/list',
  success: function(result) {
   // result is whatever the URL sends back from the request
   console.log(result)
  }
});