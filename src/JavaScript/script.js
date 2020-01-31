function loadPage(name, action) {
    return fetch('../pages/' + name + '.html').then(function(response) {
      if (response.ok) {
        response.text().then(function(html) {
          document.body.innerHTML = html;
          document.body.setAttribute('class', name);
        console.log("document.body", document.body)
          if (action) {
            action.call();
          }
        });
      }
    })}

loadPage("landing")
