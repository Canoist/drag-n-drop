const placeholders = document.querySelectorAll('.placeholder')
const item = document.querySelector('.item')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
   event.target.classList.add('hold')
   setTimeout(() => event.target.classList.add('hide'), 0)
}
function dragend(event) {
   event.target.classList.remove('hold')
   event.target.classList.remove('hide')
   document.body.classList.remove('cover')
}

for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover', dragover)
   placeholder.addEventListener('dragenter', dragenter)
   placeholder.addEventListener('dragleave', dragleave)
   placeholder.addEventListener('drop', drop)
}
function dragover(event) {
   event.preventDefault()
}
function dragenter(event) {
   event.target.classList.add('hovered')
   document.body.classList.add('cover')
}
function dragleave(event) {
   event.target.classList.remove('hovered')
}
function drop(event) {
   event.target.append(item)
   event.target.classList.remove('hovered')
}