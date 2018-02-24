module.exports = function check(str, bracketsConfig) {


  var res = true;
  var numberOfFirst = 0;
  var numberOfSecond = 0;
  if (str.length%2 === 1) {
     res = false;
  }
  else if (str.length%2 === 0) {
     for (var i =0; i<str.length; i++) {
       for (var j=0; j<bracketsConfig.length ; j++) {
         if   (str.charAt(i) === bracketsConfig[j][0]) {
           numberOfFirst ++ ;
         }
       }
     }
     for (var x =0; x<str.length; x++) {
       for (var y=0; y<bracketsConfig.length; y++) {
         if   (str.charAt(x) === bracketsConfig[y][0]) {
          numberOfSecond ++ ;
         }
       }
     }
     if (numberOfFirst !== numberOfSecond)  {
       res = false;
     }

  }

  return res;

}
