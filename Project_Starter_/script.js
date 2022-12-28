const panels = document.querySelectorAll('.panel')
//*to view panels by index in dev tools
console.log(panels[0])
//loop through each panel (node list) with high order array method with arrow function
panels.forEach((panel) => {
  console.log(panel)
})
//test event listener with console.log
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    console.log(123)
  })
})
//event listener for user click interaction, when click happens run a function
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses() //to remove other active panels
    panel.classList.add('active')
  })
})
//function to remove active classes with remove object
function removeActiveClasses() {
  panel.forEach((panel) => {
    panel.classList.remove('active')
  })
}
