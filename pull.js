var extractedRepos = [];
var url = 'https://api.github.com/users/KeenanKunzelman/repos';
$.ajax({
  url
}).done(function(data){
  for (var i = 0; i < data.length; i++) {
    extractedRepos.push({
      name: data[i].name,
      description: data[i].description,
      url: data[i].html_url,
      language: data[i].language
    });
  }