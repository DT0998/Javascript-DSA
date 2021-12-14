
// add solution
// add1 number
function addUpto1(n){
    let total = 0;
    for(let i = 1;i<=n;i++){
        total += i
    }
    return total
}
// add1.5 number
function addUpto15(n){
return n * (n +1)/2
}

console.log(addUpto1(6))
console.log(addUpto15(6))
// add 1 timming
function addUpto2(n){
    let total = 0;
    for(let i = 1;i<=n;i++){
        total += i
    }
    return total
}

var time1 = performance.now()
addUpto2(1000000000)
var time2= performance.now()
console.log(`time elapsed:${(time2 - time1)/1000} seconds 1`)


// add 2 timming
function addUpto25(n){
    return n * (n +1)/2
}

var timer1 = performance.now()
addUpto2(1000000000)
var timer2= performance.now()
console.log(`time elapsed:${(timer2 - timer1)/1000} seconds 2`)

// tách chữ cách 1
function charCount1(str){
    // make object to return at end
    var result ={}
    // loop over string,for each character
    for(var i = 0;i<str.length;i++){
        var char = str[i].toLowerCase()
        // if character is number/letter AND is a key in object,add one to count
        if(result[char] > 0){
            result[char]++
            // if character is number/letter AND is not in object,set value = 1
        }else{
            result[char] = 1
        }

    }
    // if character is something else(space,period,...) dont do anything
    // return object at end
    return result;
}
// console.log(charCount1('hello'))

// tách chữ cách 2
function charCount2(str){
    // make object to return at end
    var result ={}
    // loop over string,for each character
    for(var char of str){
        var obj = char.toLowerCase()
        // if character is number/letter AND is a key in object,add one to count
        if(isAlphaNumeric(char)){
           obj[char] = ++obj[char] || 1
            // if character is number/letter AND is not in object,set value = 1
        }

    }
    // if character is something else(space,period,...) dont do anything
    // return object at end
    return obj;
}

// refactory alpha
function isAlphaNumeric(char){
    var code = char.charCodeAt(0)
    if(!(code >47 && code < 58) && // numeric(0-9)
       !(code >64 && code < 91 ) && //uper alpha(A-Z)
       !(code > 96 && code < 123)) {
        //    lower alpha(a-z)
        return false

       }
       return true
}

console.log(charCount2('hello'))


// frequently counter pattern
// function same
function same(arr1,arr2){
    if(arr1.length !== arr2.length){

        return false
    }
    for(let i = 0;i<arr1.length;i++){
        let correctIndex = arr2.indexOf(arr1[i] **2)
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true;

}

// function same refactory
function samerefactory(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 ={}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] ||0)+1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false
        }
      
    }
    return true
}
samerefactory([1,2,3,2],[9,1,4,4])


// valid anagram
function validAnagram(first,second){
    if(firts.length !== second.length){
        return false
    }
    const lookup ={}
    for(let i = 0;i<first.length;i++){
        let letter = first[i]
        // if letter exist,increment,otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    for(let i = 0; i< second.length;i++){
        let letter = second[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] = -1
        }
    }
    return true
}

// tìm sum = 0
function SumZero(arr){
    for(let i =0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i],arr[j]]
            }
        }
    }
}
console.log(SumZero([-4,-3,-2,-1,0,1,2,5]))

// refactor sumzero
function SumZero2(arr){
    let left = 0
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left],arr[right]]
        }else if(sum >0){
            right--
        }else{
            left++
        }
    }
}

// count unique value
function countUniqueValue(arr){
    var i = 0;
    for(var j = 1;j<arr.length;j++){
        if(arr[i] !== arr[j])
        i++;
        arr[i] = arr[j]
    }
    return i +1;
}

// max subarray sum
function maxSubarraySum1(arr,num){
    if(num > arr.length){
        return null
    }
    var max = -Infinity
    for(let i = 0;i <arr.length - num + 1;i++){
        temp = 0
        for(let j = 0;i<num;j++){
            temp += arr[i + j]
        }
        if(temp > max){
            max = temp
        }
        console.log(temp,max)
    }
    return max
}

// max sub array sum refactor
function maxSubarraySum2(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num)
    return null
    for(let i = 0;i<num;i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num;i<arr.length;i++){
        tempSum = tempSum - arr[i - sum] + arr[i]
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
}


