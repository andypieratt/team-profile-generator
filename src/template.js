function managerCard(manager) {
  return `<section class="m-5">
    <div class="card border border-danger d-flex align-content-center flex-wrap" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">
          ${manager.name}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manager.email}</li>
        <li class="list-group-item">${manager.officeNum}</li>
      </ul>
      <!-- <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div> -->
    </div>
  </section>`;
}

function engineerCard(engineer) {
  return `<section class="m-5">
    <div class="card border border-danger d-flex align-content-center flex-wrap" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">
          ${engineer.name}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.email}</li>
        <li class="list-group-item">${engineer.github}</li>
      </ul>
      <!-- <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div> -->
    </div>
  </section>`;
}

function internCard(intern) {
  return `<section class="m-5">
    <div class="card border border-danger d-flex align-content-center flex-wrap" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">
          ${intern.name}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.id}</li>
        <li class="list-group-item">${intern.email}</li>
        <li class="list-group-item">${intern.school}</li>
      </ul>
      <!-- <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div> -->
    </div>
  </section>`;
}

function generateHTML(teamArr) {
  const cards = teamArr.map((teamObj) => {
    if (teamObj.getRole() === "Manager") {
      return managerCard(teamObj);
    } else if (teamObj.getRole() === "Engineer") {
      return engineerCard(teamObj);
    } else if (teamObj.getRole() === "Intern") {
      return internCard(teamObj);
    }
  });
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--CUSTOM BOOTSTRAP CSS-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>My Team</title>
</head>
<body>
  <!--HEADER SECTION-->
  <header class="bg-danger p-3">
    <h1 class="text-center text-white m-3">My Team:</h1>
  </header>

  <!--CARD/CONTENT SECTION-->
  ${cards.join("\n  ")}

  <!--BOOTSTRAP JS IMPORT-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <!--CUSTOM JS-->
  <script src="/index.js"></script>
</body>
</html>`;
}

module.exports = generateHTML;
