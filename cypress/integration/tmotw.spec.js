/// <reference types="cypress" />



context('Waiting', () => {
  beforeEach(() => {
    cy.visitMobile('http://localhost:3000/')
  })
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  it('asd', async () => {
    cy.title();

    const mouseMovements = await cy.fixture('sample');
    console.log("MM", mouseMovements)

    debugger
    cy.get('.canvasbox')
      .invoke('mousedown', { which: 1, clientX: 600, clientY: 100 })

      .invoke('mousemove', { which: 1, clientX: 600, clientY: 600 })

    // .trigger('mousedown', { which: 1, force:true})
    // .trigger('mousemove', { clientX: 310, clientY: 245 })
    // .trigger('mouseup', { force: true })
    
    // draggable.dispatchEvent(new MouseEvent('mousedown'));
    // for (const coords of mouseMovements){
      //   console.log(coords)
      //   if (coords = "step"){
        //     draggable.dispatchEvent(new MouseEvent('mouseup'));
        
        //   } else {
          //     draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: coords.x, clientY: coords.x }));
          
          //   }
          
          // }
          // draggable.dispatchEvent(new MouseEvent('mousemove', {
            //   clientX: coords.x + 10,
            //   clientY: coords.y + 10  // A few extra pixels to get the ordering right
            // }));
            // /* ==== Generated with Cypress Studio ==== */
            // cy.get('#canvas').click();
            // cy.get('#canvas').click();
            cy.get('#canvas')
            .swipe({ delay: 2000 }, [[80, 250], [80, 350]], [[80, 100], [80, 500]])
            /* ==== End Cypress Studio ==== */
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

            cy.fixture('sample').then((results) => {
              // load data from logo.png
              console.log(results)
              // const mouseMovements = shuffle(results);
              const mouseMovements = results.reverse();

              for (let i = 0; i < mouseMovements.length; i++){
                if (i == 0 || mouseMovements[i-1] == "step" ){
                  cy.get('#canvas').trigger('mousedown', { which: 1, clientX: mouseMovements[i].x, clientY: mouseMovements[i].y, force: true })
                }
                mouseMovements[i].x && cy.get('#canvas').trigger('mousemove', { clientX: mouseMovements[i].x, clientY: mouseMovements[i].y })

                if (mouseMovements[i] == "step"){
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
            
            for (let i = 0; i < mouseMovements.length; i++){
              if (i == 0 || mouseMovements[i-1] == "step" ){
                cy.get('#canvas').trigger('mousedown', { which: 1, clientX: 200, clientY: 140, force: true })
              }
              mouseMovements[i].x && cy.get('#canvas').trigger('mousemove', { clientX: 300, clientY: 240 })
              if (mouseMovements[i] == "step"){
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