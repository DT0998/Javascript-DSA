// recursion countdown
function countDown(num){
    if(num <=0){
        console.log('all done')
        return ;

    }
    console.log(num)
    num--;
    console.log(num)

}
countDown(5)

// // recursion countdown refactory
// function countDown(num){
//     for(var i = num;i >0;i--){
//         console.log(i)
//     }
//     console.log('all done')
// }
// countDown(5)

function sumRange(num){
    if(num === 1) return 1
    return num + sumRange(num - 1)
} 
