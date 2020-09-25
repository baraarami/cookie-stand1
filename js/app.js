var tableEl = document.getElementById("table1");
console.log(tableEl);
workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Location(lname,minCustomerHour, maxCustomerHour, average) {  this.lname=lname;
    this.lname=lname;
    this.minCustomerHour = minCustomerHour;
    this.maxCustomerHour = maxCustomerHour;
    this.average = average;
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.cusPerHour = [];
    this.cookiesPerHour = [];
    this.total = 0;
    this.getNum = function( ) {
      for (var i = 0; i < this.hours.length; i++){
        this.cusPerHour.push(getRandomInt(this.minCustomerHour,this.maxCustomerHour));
       }
    };
    
    this.getcookiesPerHour = function( ) {
      for (var i = 0; i < this.hours.length; i++){
        this.cookiesPerHour.push(Math.ceil(this.average * this.cusPerHour[i]));
        this.total += this.cookiesPerHour[i];
    }
};
  


  }
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
    }

    var a = new Location("Seattle",26, 65, 6.3);
    var b = new Location("Tokyo",3, 24, 1.2);
    var c = new Location("Dubai",11, 38, 3.7);
    var d = new Location("Paris",20, 38, 2.3);
    var e = new Location("Lima",2, 16, 4.6);

a.getNum();
a.getcookiesPerHour();
b.getNum();
b.getcookiesPerHour();
c.getNum();
c.getcookiesPerHour();
d.getNum();
d.getcookiesPerHour();
e.getNum();
e.getcookiesPerHour();
  
  

function createHeader()
{    ///create the header of the table
   var headRow = document.createElement('tr');
   tableEl.appendChild(headRow) ;
   var rowEl=document.createElement('th');
   headRow.appendChild(rowEl);
   rowEl.textContent="   ";
   
   for(var i=0;i<workHours.length;i++){
    var rowEl1=document.createElement("th");
    headRow.appendChild(rowEl1);
    rowEl1.textContent=this.workHours[i];
   }
   var rowE2=document.createElement('th');
   headRow.appendChild(rowE2);
   rowE2.textContent="Daily-Total";


}
createHeader();
///render for table
 var totalofTotal=0;
 Location.prototype.render = function(){
     var totalofTotal=0;
    var row = document.createElement('tr');
    tableEl.appendChild(row);
    var rowData =document.createElement('td');
    row.appendChild(rowData);
    rowData.textContent=this.lname;

    for(var i=0;i<workHours.length;i++)
 {
    var rowData1 =document.createElement('td');
    row.appendChild(rowData1);
    rowData1.textContent=this.cookiesPerHour[i];
}

var rowData2 =document.createElement('td');
    row.appendChild(rowData2);
    rowData2.textContent=this.total;

}
function creatFooter()
{var totalofTotal2=0;
var row11 = document.createElement('tr');
tableEl.appendChild(row11);
var rowData3 =document.createElement('td');
row11.appendChild(rowData3);
rowData3.textContent="Total";
for(var j=0;j<workHours.length;j++){

    for(var i=0;i<arguments.length;i++){
        totalofTotal+=arguments[i].cookiesPerHour[j];
        totalofTotal2+=arguments[i].cookiesPerHour[j];}
        var rowData3 =document.createElement('td');
        row11.appendChild(rowData3);
        rowData3.textContent=totalofTotal;
        totalofTotal=0;}

var rowData3 =document.createElement('td');
row11.appendChild(rowData3);
rowData3.textContent=totalofTotal2;
        
}
a.render();
b.render();
c.render();
d.render();
e.render();
creatFooter(a,b,c,d,e);

form1.addEventListener('submit' , function (event){
   event.preventDefault();
  
    var loc = event.target.lname.value;
    console.log(loc);
    var minN = event.target.min.value;
    var maxN = event.target.max.value;
    var aveN = event.target.ave.value;
  var add = new Location (loc,minN,maxN,aveN);
  var rowNum =tableEl.rows.length;
  tableEl.deleteRow(rowNum-1);
  
  add.getNum();
  add.getcookiesPerHour();
  add.render();
  creatFooter(a,b,c,d,e,add);
  form1.reset();
  });
    


// form.addEventListener('submit' , function (event){
//   console.log(event.target);
//   var loc =event.target.lname.value;
//   console.log(loc);
    // var minN =document.getElementById("min");
    // minN=parseInt(minN);
    // console.log("aya",minN);
    // var maxN=document.getElementById("max");
    // maxN=parseInt(maxN);
    // var aveN=document.getElementById("av");
    // aveN=parseInt(aveN);
    // var add = new Location(loc,minN,maxN,aveN);
    // add.getNum();
    // add.getcookiesPerHour();
    // add.render();
    // creatFooter(a,b,c,d,e,add);





// function AddRow (event){

//   var loc =document.getElementById("lname");
//   var minN =document.getElementById("min");
//   minN=parseInt(minN);
//   console.log("aya",minN);
//   var maxN=document.getElementById("max");
//   maxN=parseInt(maxN);
//   var aveN=document.getElementById("av");
//   aveN=parseInt(aveN);
//   var add = new Location(loc,minN,maxN,aveN);
//   add.getNum();
//   add.getcookiesPerHour();
//   add.render();
//   creatFooter(a,b,c,d,e,add);
// }


// function myfunction()
// {  a=document.getElementById("lname");
//    b=document.getElementById("min");
//    b=parseInt(b);
//    c=document.getElementById("max");
//    c=parseInt(c);
//    d=document.getElementById("av");
//    d=parseInt(d);
//    var add = new Location(a,b,c,d);
//   add.getNum();
//   add.getcookiesPerHour();
//   add.render();

// }
