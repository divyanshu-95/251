let str="999";
let bool=true;
let i=parseInt(str)+1;
while(bool){
    i1=i.toString();
    if(i1==i1.split("").reverse().join("")){
        console.log(i1.toString());
        bool=false;
    }
    i=i+1;
}
