//your JS code here. If required.
const changeButton=document.getElementById("change_button");
const rstButton=document.getElementById("reset_button");

changeButton.addEventListener("click",function(){

const blockId = document.getElementById("block_id").value.trim();
const colour = document.getElementById("colour_id").value.trim();

	const allItems = document.querySelectorAll(".grid-item");
	allItems.forEach(item=>{
		item.style.backgroundColor = "transparent";
	})
	const targetItem=document.getElementById(blockId);
	if(targetItem){
		targetItem.style.backgroundColor=colour;
	}
	else{
		alert("enter a valid colour");
	}
})
rstButton.addEventListener("click",function(){
const allItems = document.querySelectorAll(".grid-item");
	allItems.forEach(item=>{
		item.style.backgroundColor="transparent";
	})
})

document.getElementById("block_id").value="";
document.getElementById("colour_id").value="";
