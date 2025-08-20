let arr = []
let newArr = []
for (let modal = prompt("eppend by 'add, ', delete by 'del, ' and finish by 'stop'"); modal != 'stop';) {
    if (modal) {
        arr = modal.split(' ')
    }
    if (arr[0] == 'add,' && arr.length) {
        newArr.push(arr[1])
        console.log(newArr);
        arr = []
    }else if (arr[0] == 'del,' && arr.length) {
        newArr.splice(newArr.indexOf(arr[1]), 1)
        console.log(newArr);
        arr = []
    }
    modal = prompt("eppend by 'add, ', delete by 'del, ' and finish by 'stop'")
}

console.log(newArr);
