let chat=document.getElementById('Chat-container');
let message=document.getElementById('message-input');
let button=document.getElementById('Send-button');
let value=message.value;
function addMessage(){
   var para=document.createElement("p");
       para.textContent=message.value;
       message.value="";
       chat.appendChild(para);
      
}
button.addEventListener("click",(e)=>{
  if(message.value !=''){
    addMessage();
  }
}
)








   
    
    




