() => {
  // stub
  console.log('fired!');

  //select elements with Javascript

  //setting up a varaiable using the let keyboard,
  //and using a CSS selector to find the element we want to use.

  //let stores the reference to element as a variable (in memory)
  let svgGraphic = document.querySelector("#badgeSVG)");

  // functions are reusable pieces of code
  // that you can run anytime
  funtion logMyID() {
    console.log(this.id);

    this.style.opacity = 0.5
  }

  svgGraphic.addEventListener("click", logMyId);
  /* #badgeSVG {
    color: #fff
  } ----------this is the same as above---*/
})();
