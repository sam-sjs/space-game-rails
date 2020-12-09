
$(document).ready(function() {
  console.log("jQuery running!");

  const setupSystem = function() {
    for(let i = 1; i < 5; i++) {
      showPlanets(`#planet${i}`);
      highlightFuel(`#fuel${i}`);
    };
    twinkleTwinkle();
  };

  const highlightFuel = function(fuelId) {
    const fuel = $(fuelId).html();
    switch(fuel) {
      case 'Helium-3 is being mined...':
        $(fuelId).css('color', '#77DD77');
        break;
      case 'Helium-3 Available':
        $(fuelId).css('color', '#779ECB');
        break;
      case 'No Helium-3 deposits found':
        $(fuelId).css('color', '#FE6B64');
        break;
    };
  };

  const showPlanets = function(planetId) {
    if($(planetId).find('img').length) {
      $(planetId).show();
    } else {
      $(planetId).hide();
    };
  };

  const twinkleTwinkle = function() {
    //Makes for twinkly stars...tried to format the code nicer but what the hell...
    for (let i = 0; i < 250; i++) {
      const star =
      '<div class="star" style="animation: twinkle ' + ((Math.random() * 2) + 2)+'s linear ' + ((Math.random() * 1)) + 's infinite; top: ' + Math.random() * $(window).height() + 'px; left: ' + Math.random() * $(window).width() + 'px;"></div>';
      $('#page_container').append(star);
    };
  }

  setupSystem();

})
