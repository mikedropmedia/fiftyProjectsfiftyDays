const panels = document.querySelectorAll('.panel')
//print out a node list with div and properties, target panel by index:
//console.log(panels)

//high order array method to take in function as an argument
panels.forEach((panel) => {
  //console.log(panel) //loop through each panel with this
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
