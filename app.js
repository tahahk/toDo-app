
function myFunc() {
     var inputText = document.getElementById('inputTitle').value;
     var newList = document.createElement('LI');
     var tagInput = document.createTextNode(inputText);
    //  document.getElementsByTagName('LI').className = 'newlist'
     newList.appendChild(tagInput);
     document.getElementById('list').appendChild(newList).className= 'tag';
    
     
     
     var inputDate = document.getElementById('inputDate').value;
     var date = document.createElement('SPAN')
     var dateInput = document.createTextNode(inputDate);
    // document.getElementsByTagName("span").className = 'newlist'
     date.appendChild(dateInput);
     document.getElementById('list').appendChild(date).className='newList';
     
}

function removeAll(){
   document.getElementById("list").innerHTML = ""
}
