function myFunc() {
    var x = 0;
    return (x += "ads"), x; // the same as return ++x;
  }
  console.log(myFunc())