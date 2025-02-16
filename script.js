//your JS code here. If required.
const grid = document.querySelector(".grid-container")
const gridItem = document.querySelectorAll(".grid-item");
const blockInput = document.querySelector("#block_id");
const colorInput =  document.querySelector("#colour_id");
const changeBtn = document.querySelector("#change_button")
const resetBtn = document.querySelector("#reset_button")
let y = 0
let check = false
changeBtn.addEventListener("click",()=>{
	let x = blockInput.value
	if(check){
	  gridItem[y].style.opacity = "0.5"
	}
	// gridItem[y].style.opacity = "1"
	gridItem.forEach((ele,i)=>{
		if(x==i+1){
		  ele.style.backgroundColor = `${colorInput.value}`
		  y = i
		}
	})
	check = true
})
resetBtn.addEventListener("click",()=>{
	gridItem.forEach((ele,i)=>{
		ele.style.backgroundColor = ""
		ele.style.opacity = "1"
	})
	check = false;
})