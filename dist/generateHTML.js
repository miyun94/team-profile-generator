function generatePage(allEmployees){
    toAdd = [];
    HTML = `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <title>Team Portfolio</title>
    </head>
  
    <body>
      <h1></h1>
      <main>
      <div class="card" style="width: 18rem;">
     <div class="card-header">
     
    </div>`
    for(i = 0; i < allEmployees.length; i++){
        HTML += allEmployees[i].card
    }
    HTML += `</div>
      </main>
    </body>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

    </html> 
    `;
    return HTML
};

module.exports = generatePage(); 


<body>
  <h1></h1>
  <main>
    <div class="row">
      <div class="column">
        <div class="card">
          <div class="container">
            <div>Manager</div>
            <div>Peter</div>
            <div>394068340</div>
            <div>alsdkjfa@lskdfal.com</div>
            <div>384-493-9340</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="container">
            <div>Engineer</div>
            <div>Asldkfa</div>
            <div>23456</div>
            <div>dlafwie@gd.com</div>
            <div>dlaw83</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="container">
            <div>Intern</div>
            <div>Intern</div>
            <div>290523</div>
            <div>lkdfajlw@g.com</div>
            <div>UCLA</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>