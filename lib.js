
const name = ["My array Libery"];


const Options = {
    version:"2.2",
    author:"code Malayalam"
};

  function addAll(arr=[]){
    log("addAll");
    return arr.reduce((total,item)=>total+item,0);
};


function findMax(arr=[]){
    log("findMax");
    return Math.max(...arr);
};

function log(val){
    console.log("INSIDE",val);
    
}
//  export default addAll; 
export {
    name,addAll ,Options,log,findMax
}
