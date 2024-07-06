var a=10,b=10,c=10,d=10,e=10;

 flag=0

 function var1()
 {   if(flag==0)
     {
       a=parseInt(prompt("enter a integer value"));
       if((a==0)||(a==1))
       {
           alert("entered value is acceptd");
           flag=1;
           return true;
       } 
       else
       {
           alert("entered value is out of range please enter again");
           return false;
       }
     }
 }


 
 function var2()
 {   if(flag==1)
     {
       b=parseInt(prompt("enter a integer value"));
       if((a==0)||(a==1))
       {
           alert("entered value is acceptd");
           flag=2;
           return true;
       } 
       else
       {
           alert("entered value is out of range please enter again");
           return false;
       }
     }
     else
     {
         alert("Select value first from 1st table");
         return false;
     }
 }

 function var3()
 {   if(flag==2)
     {
       c=parseInt(prompt("enter a integer value"));
       if((a==0)||(a==1))
       {
           alert("entered value is acceptd");
           flag=3;
           return true;
       } 
       else
       {
           alert("entered value is out of range please enter again");
           return false;
       }
     }
     else
     {
         alert("Select value first from above remaining tables table");
         return false;
     }
 }

 
 
 function var4()
 {   if(flag==3)
     {
       d=parseInt(prompt("enter a integer value"));
       if((a==0)||(a==1))
       {
           alert("entered value is acceptd");
           flag=4;
           return true;
       } 
       else
       {
           alert("entered value is out of range please enter again");
           return false;
       }
     }
     else
     {
         alert("Select value first from above remaining tables table");
         return false;
     }
 }

 
 
 function var5()
 {   if(flag==4)
     {
       e=parseInt(prompt("enter a integer value"));
       if((a==0)||(a==1))
       {
           alert("entered value is acceptd");
           return true;
       } 
       else
       {
           alert("entered value is out of range please enter again");
           return  false;
       }
     }
     else
     {
         alert("Select value first from above remaining tables table");
         return  false;
     }
 }
 



// convert binary to decimal


function BINDEC() 
{
var n1=parseInt((e*10000)+(d*1000)+(c*100)+(b*10)+a);
var dec = parseInt(0), i = parseInt(0), rem=parseInt(0);
var n=parseInt(n1);
while (n != 0) 
{
 rem = parseInt(n % 10);
 n=parseInt(n/10);
 dec=parseInt(dec+(rem * Math.pow(2,i)));
 i=parseInt(i+1);
}
    out_id=document.getElementById("output");
    out_id.innerHTML="Date  =  "+dec;
    // document.getElementById("output").innerHTML=dec
}



// logic to find out the day

function DMY()
    {
    x=document.getElementById("dob");
    let dob = new Date(x.value);
    num_day=dob.getDay();
    y=document.getElementById("output2");
    
    switch(num_day)
        {
            case 0: y.innerHTML="Day = SUNDAY";
                    break;
            case 1: y.innerHTML="Day = MONDAY";
                    break;
            case 2: y.innerHTML="Day = TUESDAY";
                    break;
            case 3: y.innerHTML="Day = WEDNESDAY";
                    break;
            case 4: y.innerHTML="Day = THURSDAY";
                    break;
            case 5: y.innerHTML="Day = FRIDAY";
                    break;
            case 6: y.innerHTML="Day = SATURDAY";
                    break;
                                
        }

  
}       

