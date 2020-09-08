// when the form is submitted
// select the text from the form
// create a list element using a template literal with the text from the form
// add the list element to the document



const addButton = document.querySelector(".add-button")

addButton.addEventListener("click", (e) => {
  e.preventDefault()
   const text = document.querySelector(".input-text").value
   const listElement = `
   <li>
   ${text}
   <button class="delete-button">X</button>
   </li>`
   document.querySelector(".todo-list-content").insertAdjacentHTML("beforeend", listElement)
   document.querySelector(".input-text").value = ""
   const deleteButton = document.querySelector(".delete-button")
   deleteButton.addEventListener("click", () => {
     deleteButton.parentNode.remove()
   })
})
