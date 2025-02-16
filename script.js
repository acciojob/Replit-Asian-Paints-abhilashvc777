//your JS code here. If required.
// const grid = document.querySelector(".grid-container")
// const gridItem = document.querySelectorAll(".grid-item");
// const blockInput = document.querySelector("#block_id");
// const colorInput =  document.querySelector("#colour_id");
// const changeBtn = document.querySelector("#change_button")
// const resetBtn = document.querySelector("#reset_button")
// let y = 0
// let check = false
// changeBtn.addEventListener("click",()=>{
// 	let x = blockInput.value
// 	if(check){
// 	  gridItem[y].style.opacity = "0.5"
// 	}
// 	// gridItem[y].style.opacity = "1"
// 	gridItem.forEach((ele,i)=>{
// 		if(x==i+1){
// 		  ele.style.backgroundColor = `${colorInput.value}`
// 		  y = i
// 		}
// 	})
// 	check = true
// })
// resetBtn.addEventListener("click",()=>{
// 	gridItem.forEach((ele,i)=>{
// 		ele.style.backgroundColor = ""
// 		ele.style.opacity = "1"
// 	})
// 	check = false;
// })
let items = document.querySelectorAll('.grid-item');
let colorInput =  document.getElementById('colour_id');
let boxInput = document.getElementById('block_id');
let changeBtn = document.getElementById('change_button');
let resetBtn = document.getElementById ('reset_button');


changeBtn.addEventListener('click', changeColor);
resetBtn.addEventListener('click', resetColor);

function changeColor (){
	let color = colorInput.value.trim();
	let boxId = boxInput.value.trim();
	if(color ==='' || boxId==='' || parseInt(boxId,10)>9 || parseInt(boxId,10)<1) {
		alert('Please Enter a valid box Id (1-9) and color.')
	}
	let selectedBox = document.getElementById(boxId);
	if(selectedBox){
		   selectedBox.style.backgroundColor = color;
          }
	  
	}

function resetColor(){
	items.forEach((item)=>{
		item.style.backgroundColor = 'transparent';
	})
}