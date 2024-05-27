document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById("btn");
    var res = document.getElementById("res");
    var res2 = document.getElementById("res2");
    var res3 = document.getElementById("res3");
    var res4 = document.getElementById("res4");
    var res5 = document.getElementById("res5");
    var res6 = document.getElementById("res6");

    btn.onclick = function() {
       
        let date = document.getElementById("date").value;
        
        let dateObj = new Date(date);
        let today = new Date();
       
        let d = dateObj.getDate();
        let m = dateObj.getMonth() + 1; 
        let y = dateObj.getFullYear();

        let d1 = today.getDay();
        let m1 = today.getMonth() + 1;
        let y1 = today.getFullYear();
    
        console.log("Day:", d);
        console.log("Month:", m);
        console.log("Year:", y);

        console.log("Day:", d1);
        console.log("Month:", m1);
        console.log("Year:", y1);

        let y2,m2,d2;

        y2 = y1 - y;
        if(m1>m){
            m2 = m1 - m;
        }
        else{
            m2 = 12 + m1 - m;
        }
        if(d1>d){
            d2 = d1-d;
        }
        else{
            d2 = 30+ d1- d;
        }
        res.innerHTML = "Day:";
        res2.innerHTML = d2;

        res3.innerHTML = "              Month:";
        res4.innerHTML = m2;

        res5.innerHTML = "              Year:";
        res6.innerHTML = y2;
        
      
    };
});
