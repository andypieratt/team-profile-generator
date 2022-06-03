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

function generateCards(teamArr) {
  const cards = teamArr.map((teamObj) => {
    if (teamObj.getRole() === "Manager") {
      return managerCard();
    } else if (teamObj.getRole() === "Engineer") {
      return engineerCard();
    } else if (teamObj.getRole() === "Intern") {
      return internCard();
    }
  });
}

module.exports = generateCards;
