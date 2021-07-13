//first exercise

// function addingRows (){
//     let table = document.getElementsById('sampleTable');
//     let row = document.getElementsByTagName('tr');
//     let rowAdder = document.getElementsByTagName('input');
//     for (i = 0; i = table.length; i++){
        
//     }
// }

// function insertRow() {
//     let table = document.getElementsByTagName('tbody')[0];
//     let row = document.createElement('tr');
//     let num = table.children.length + 1;
//     console.log(table);
//     let columns = [
//             document.createElement('td'),
//             document.createElement('td')
//     ];
//     columns[0].innerHTML = `Row${num} cell1`;
//     columns[1].innerHTML = `Row${num} cell2`;
//     row.appendChild(columns[0]);
//     row.appendChild(columns[1]);
//     table.appendChild(row);
// }


function getValue (event){
    for (elem of event.target.elements){
    if(elem.name == 'fname' || elem.name == 'lname'){
        console.log(elem.value)
    }
    }
}
Event.preventDefault();