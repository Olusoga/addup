var addUp = (nums, target)=>{
    for(var i= 0; i<=nums.length; i++ ){
        for(var j = 0; j<=nums.length; j++){
            if((nums[i]+nums[j])== target){
                return [i, j]
            }
        }
    }
}
console.log(addUp([2, 7, 5, 6, 8,  9]), 11)

