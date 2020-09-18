var Seattle={
    minCustomerHour :26,
    maxCustomerHour :65,
    average : 6.3,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cusPerHour : [],
    cookiesPerHour : [],
    total : 0,
    getNum : function( ) {
        console.log("Seattle");
        document.writeln("Seattle");
        document.writeln("<br>");
      for (var i = 0; i < this.hours.length; i++){
        this.cusPerHour.push(getRandomInt(this.minCustomerHour,this.maxCustomerHour));
        document.writeln(this.hours[i]+":",this.cusPerHour[i]+"cookies");
        document.write("<br>");
        console.log(this.hours[i]+":",this.cusPerHour[i]+"cookies");}
       
    },
    
    getcookiesPerHour : function( ) {
      for (var i = 0; i < this.hours.length; i++){
        this.cookiesPerHour.push(Math.ceil(this.average * this.cusPerHour[i]));
        this.total += this.cusPerHour[i];
    }
    document.writeln("total : "+this.total);
    document.write("<br>");
    console.log("total : "+this.total);}
  
  };
  function getRandomInt(min, max) {
      
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  }
Seattle.getNum();
Seattle.getcookiesPerHour();

var Tokyo={
    minCustomerHour :3,
    maxCustomerHour :24,
    average : 1.2,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cusPerHour : [],
    cookiesPerHour : [],
    total : 0,
    getNum : function( ) {
        console.log("tokyo");
        document.writeln("Tokyo");
        document.write("<br>");
      for (var i = 0; i < this.hours.length; i++){
        this.cusPerHour.push(getRandomInt(this.minCustomerHour,this.maxCustomerHour));
        document.writeln(this.hours[i]+":",this.cusPerHour[i]+"cookies");
        document.write("<br>");
        console.log(this.hours[i]+":",this.cusPerHour[i]+"cookies");}
       
    },
    
    getcookiesPerHour : function( ) {
      for (var i = 0; i < this.hours.length; i++){
        this.cookiesPerHour.push(Math.ceil(this.average * this.cusPerHour[i]));
        this.total += this.cusPerHour[i];
    }
    document.writeln("total : "+this.total);
    document.write("<br>");
    console.log("total : "+this.total);}
  
  };
  function getRandomInt(min, max) {
      
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  }
Tokyo.getNum();
Tokyo.getcookiesPerHour();

var Dubai={
    minCustomerHour :11,
    maxCustomerHour :38,
    average : 3.7,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cusPerHour : [],
    cookiesPerHour : [],
    total : 0,
    getNum : function( ) {
        console.log("Dubai ");
        document.writeln("Dubai");
        document.write("<br>");
      for (var i = 0; i < this.hours.length; i++){
        this.cusPerHour.push(getRandomInt(this.minCustomerHour,this.maxCustomerHour));
        console.log(this.hours[i]+":",this.cusPerHour[i]+"cookies");
        document.writeln(this.hours[i]+":",this.cusPerHour[i]+"cookies");
        document.write("<br>");}
    },
    
    getcookiesPerHour : function( ) {
      for (var i = 0; i < this.hours.length; i++){
        this.cookiesPerHour.push(Math.ceil(this.average * this.cusPerHour[i]));
        this.total += this.cusPerHour[i];
    }
    
    document.write("<br>");
    document.writeln("total : "+this.total);
    console.log("total : "+this.total);}
  
  };
  function getRandomInt(min, max) {
      
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  }
Dubai.getNum();
Dubai.getcookiesPerHour();

var Paris={
    minCustomerHour :20,
    maxCustomerHour :38,
    average : 2.3,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cusPerHour : [],
    cookiesPerHour : [],
    total : 0,
    getNum : function( ) {
        console.log("Paris");
        document.writeln("Paris");
        document.write("<br>");
      for (var i = 0; i < this.hours.length; i++){
        this.cusPerHour.push(getRandomInt(this.minCustomerHour,this.maxCustomerHour));
        document.writeln(this.hours[i]+":",this.cusPerHour[i]+"cookies");
        document.write("<br>");
        console.log(this.hours[i]+":",this.cusPerHour[i]+"cookies");}
       
    },
    
    getcookiesPerHour : function( ) {
      for (var i = 0; i < this.hours.length; i++){
        this.cookiesPerHour.push(Math.ceil(this.average * this.cusPerHour[i]));
        this.total += this.cusPerHour[i];
    }
    document.writeln("total : "+this.total);
    document.write("<br>");
    console.log("total : "+this.total);}
  
  };
  function getRandomInt(min, max) {
      
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  }
Paris.getNum();
Paris.getcookiesPerHour();

var Lima={
    minCustomerHour :2,
    maxCustomerHour :16,
    average : 4.6,
    hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cusPerHour : [],
    cookiesPerHour : [],
    total : 0,
    getNum : function( ) {
        console.log("Lima");
        document.writeln("Lima");
        document.write("<br>");
      for (var i = 0; i < this.hours.length; i++){
        this.cusPerHour.push(getRandomInt(this.minCustomerHour,this.maxCustomerHour));
        document.writeln(this.hours[i]+":",this.cusPerHour[i]+"cookies");
        document.write("<br>");
        console.log(this.hours[i]+":",this.cusPerHour[i]+"cookies");}
       
    },
    
    getcookiesPerHour : function( ) {
      for (var i = 0; i < this.hours.length; i++){
        this.cookiesPerHour.push(Math.ceil(this.average * this.cusPerHour[i]));
        this.total += this.cusPerHour[i];
    }
    document.writeln("total : "+this.total);
    document.write("\n");
    console.log("total : "+this.total);}
  
  };
  function getRandomInt(min, max) {
      
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  }
Lima.getNum();
Lima.getcookiesPerHour();

