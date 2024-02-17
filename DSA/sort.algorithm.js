// bubble sort
// optimized with noswaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length;i>0;i--){
        noSwaps = true
        for(var j =0;j<i-1;j++){
            if(arr[j] > arr[j+1]){
                // swap
                var temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;

    }
    return arr
}


// selection sort
function selectionSort(arr){
    for(var i =0;i<arr.length;i++){
        var lowest = i;
        for(var j = i+1;j<arr.length;j++){
            if(arr[j]< arr[lowest]){
                lowest =j
            }
        }
        if( i !== lowest){
            var temp = arr[i]
            arr[i]= arr[lowest]
            arr[lowest] = temp
        }

    }
    return arr;
}

// insertion sort
function insertionSort(arr){
    for(var i = 1;i<arr.length;i++){
        var currentVal = arr[i]
        for(var j = i -1 ;j>=0 && arr[j] > currentVal;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

// merge sort
function mergeSort(arr1,arr2){
    let result = []
    let i = 0;
    let j = 0;
    while(i < arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++

        }
    }


    return result
}

// merge sort 2
function mergeSort2(arr){
    if(arr.length <=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort2(arr.slice(0,mid))
    let right = mergeSort2(arr.slice(mid))
    return mergeSort2(left,right)
}

// pivot for quicksort
function pivot(arr,start =0,end=arr.length +1){
    function swap(array,i,j){
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    var pivot = arr[start]
    var swapIdx = start;
    for(var i = start +1;i<arr.length;i++){
        if(pivot>arr[i]){
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx
}

// quicksort
function quickSort(arr){
    let left = 0
    let right = arr.length -1;
    if(left < right){
        let pivotIndex = pivot(arr,left,right)
        // left
        quickSort(arr,left,pivotIndex-1)
        // right
        quickSort(arr,right,pivotIndex+1)

    }
    return arr;

}


// get digit
function getDigit(num,i){
    return Math.floor(Math.abs(num)/ Math.pow(10,i))%10
}
// digit count
function digitCount(num){
    if(num === 0){
        return 1
    }
    return Math.floor(Math.log10(Math.abs(num))) +1
}
// most digit
function mostDigits(nums){
    let maxDigits =0
    for(let i =0;i<nums.length;i++){
        maxDigits = Math.max(maxDigits,digitCount(nums[i]))
    }
    return maxDigits
}
// radixsort
function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for(let k = 0;k<maxDigitCount;k++){
        let digitBuckets = Array.from({length:10},()=>[])
        for(let i = 0;i<nums.length;i++){
            let digit = getDigit(nums[i],k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    
}
