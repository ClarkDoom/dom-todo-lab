const input = document.getElementById("input")
const submitBtn = document.querySelector("button#todo-list")
const list = document.querySelector("ul#todo-list")
const resetBtn = document.getElementById("reset")
const item = document.getElementById("list-item")

console.log(input)
console.log(submitBtn)
console.log(list)
console.log(resetBtn)


submitBtn.addEventListener("click", function(){
  if(input.value !== ""){
    const li = document.createElement('li')
    li.setAttribute("id", "list-item")
    li.textContent = input.value
    list.appendChild(li)
    input.value = ""
  } else {
    input.value = "Please enter a value"
  }
})

// RESET BUTTON
// learned about replaceChilden on stack overflow
resetBtn.addEventListener('click', function(){
  list.replaceChildren()
})

// ASK IN LAB REVIEW I can get the ul to be update dto a specific type of text but I can't seem to remove just 1 li 
list.addEventListener('click', function(){
  list.textContent = "you clicked on me"
})

