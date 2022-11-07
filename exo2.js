///////////2
function plusGrand(num) {
    let maxi = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maxi) {
            maxi = num[i];
        }
    }
    return maxi;
}

console.log(plusGrand([9, 70, 43]));