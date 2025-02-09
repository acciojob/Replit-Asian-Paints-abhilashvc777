//your JS code here. If required.
const grid = document.querySelector(".grid-container")
const gridItem   =  grid.querySelectorAll(".grid-item");
const blockInput =  document.querySelector("#block_id");
const colorInput =  document.querySelector("#colour_id");
const changeBtn = document.querySelector("#change_button")
const resetBtn = document.querySelector("#reset_button")
let y = 0
changeBtn.addEventListener("click",()=>{
	let x = blockInput.value
	gridItem[y].style.backgroundColor = "transparent"
	gridItem.forEach((ele,i)=>{
		if(x==i+1){
		  ele.style.backgroundColor = `${colorInput.value}`
		  y = i
		}
	})
})
resetBtn.addEventListener("click",()=>{
	gridItem.forEach((ele,i)=>{
		ele.style.backgroundColor = "transparent"
	})
})