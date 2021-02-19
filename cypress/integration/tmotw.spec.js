/// <reference types="cypress" />



context('Waiting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  /* === Test Created with Cypress Studio === */
  it.only('studio', async function () {

    /* ==== Generated with Cypress Studio ==== */
    // cy.get('#canvas')
    // .trigger('mousedown', { which: 1, clientX: 200, clientY: 140, force: true })
    // cy.get('#canvas')
    // .trigger('mousemove', { clientX: 300, clientY: 240 })
    // cy.get('#canvas')
    // .trigger('mousemove', { clientX: 300, clientY: 245 })

    // const mouseMovements = await cy.fixture('sample');
    let uniqueArray = [];
    cy.fixture('sample').then((results) => {
      // load data from logo.png
      console.log("RS", results)
      // const mouseMovements = shuffle(results);
      let mouseMovements = results.reverse();


      let filteredMouseMovements = [];
      var obj = {};
      var obj = {};

      filteredMouseMovements = mouseMovements.reduce((unique, o) => {
        if (o === "step"){
          unique.push(o);

        }
        
        if (!unique.some(obj => obj.x === o.x && obj.y === o.y)) {
          unique.push(o);
        }
        return unique;
      }, []);


      console.log("FMM", filteredMouseMovements)
      for (let i = 0; i < filteredMouseMovements.length; i++) {
        if (i == 0 || filteredMouseMovements[i - 1] == "step") {
          cy.get('#canvas').trigger('mousedown', { which: 1, clientX: filteredMouseMovements[i].x, clientY: filteredMouseMovements[i].y, force: true })
        }
        filteredMouseMovements[i].x && cy.get('#canvas').trigger('mousemove', { clientX: filteredMouseMovements[i].x, clientY: filteredMouseMovements[i].y })

        if (filteredMouseMovements[i] == "step") {
          cy.get('#canvas').trigger('mouseup', { force: true })
        }


      }
      cy.get('#canvas').trigger('mouseup', { force: true })
    })


    // .swipe({ delay: 2000 }, [[80, 250], [80, 350]], [[80, 100], [80, 500]])
    /* ==== End Cypress Studio ==== */
  });
})


/// <reference types="cypress" />


xit('studio', async function () {

  const mouseMovements = await cy.fixture('sample');
  // cy.get('#canvas')
  cy.get('#canvas')
    .trigger('mousedown', { which: 1, clientX: 200, clientY: 140, force: true })
    .trigger('mousemove', { clientX: 300, clientY: 240 })
    .trigger('mouseup', { force: true })

  for (let i = 0; i < mouseMovements.length; i++) {
    if (i == 0 || mouseMovements[i - 1] == "step") {
      cy.get('#canvas').trigger('mousedown', { which: 1, clientX: 200, clientY: 140, force: true })
    }
    mouseMovements[i].x && cy.get('#canvas').trigger('mousemove', { clientX: 300, clientY: 240 })
    if (mouseMovements[i] == "step") {
      cy.get('#canvas').trigger('mouseup', { force: true })
    }


  }
  /* ==== Generated with Cypress Studio ==== */
  // .swipe({ delay: 2000 }, [[80, 250], [80, 350]], [[80, 100], [80, 500]])
  /* ==== End Cypress Studio ==== */
});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}