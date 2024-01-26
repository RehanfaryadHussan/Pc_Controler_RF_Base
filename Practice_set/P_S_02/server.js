export let a = 10;
let error = ()=>{
   console.log('Enter the values correctly.')
   return '';
}
let sum = (h=error(),b=0)=>{
    if(h == 0){
        return '';
    }else{
        return h+b;
    }
}

export default sum;