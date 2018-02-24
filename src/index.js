module.exports = function check(str, bracketsConfig) {




  var res = true;
  var numberOfFirst = 0;
  var numberOfSecond = 0;
  var ar = [];

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
       //console.log("false in the number");
     }
     else if (numberOfFirst === numberOfSecond) {
       for (var b=0; b<str.length; b++) {
         for (var c=0; c<bracketsConfig.length; c++) {
           if (str.charAt(b) === bracketsConfig[c][0] && bracketsConfig[c][0] === bracketsConfig[c][1] ){
             //console.log("элемент " + b + "в первом ифе с двойным равно");
             var naan =0;
             for ( var s=0; s<ar.length; s++) {
               if (ar[s] === bracketsConfig[c][0]) {
                 naan++;
               }
              // console.log("naan = " + naan);
             }
             if ( naan !==1 && (naan %2==1 || naan ===0)) {
               ar.push(str.charAt(b));
               //console.log("naan = " + naan + ar);
             }
             else {
               if ( bracketsConfig[c][0]!== ar.pop())
                 {
                   res = false;
                //   console.log("false in the similar");
                 }
             }
           }
         else if (str.charAt(b) === bracketsConfig[c][0]) {
           ar.push(str.charAt(b));
           //console.log("элемент " + b + "во втором ифе пушимся" + ar );
         }
         else if (str.charAt(b) === bracketsConfig[c][1]) {
           //console.log("элемент " + b + "в третьем ифе ");
            reverseBracket =  bracketsConfig[c][0];
            if (ar.length === 0 || reverseBracket!== ar.pop())
              {
                res = false;
              //  console.log("false in the last");
              }

         }
         else {
           continue;
         }
       }
       }

     }

  }

//console.log(res);
 return res;
}
