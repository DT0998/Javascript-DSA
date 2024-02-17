// linear search
function linearSearch(arr,val){
    for(var i = 0;i<arr.length;i++){
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([34,56,1,2,3],3))

// binary search
function binarySearch(arr,val){
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end)/2)
    while(arr[middle] !== val && start <= end){
        if(val < arr[middle]){
            end = middle -1
        }else{
            start = middle +1
        }
        middle = Math.floor((start + end)/2)
    }
    if(arr[middle] == val){
        return middle
    }
    return -1

}
console.log(binarySearch([34,56,1,2,3],2))

// naive string search
function naiveSearch(long,short){
    var count =0;
for(var i =0;i<long.length;i++){
    for(var j = 0;j<short.length;j++){
        if(short[j] !== long[i+j]){
            break;
        }
        if(j === short.length -1){
            count++
        }
    }
}
return count;
}
console.log(naiveSearch("ozzozzomgzzomg","omg"))


