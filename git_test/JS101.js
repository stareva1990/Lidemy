//綜合題目練習Lv1
/*
練習一
請你分別用 for loop 以及 while 迴圈，印出 1~9。
*/
// for loop
for(var i = 1; i < 10; i++) {
    console.log(i)
}

// while
var i = 1
while (i <= 10) {
    console.log(i)
    i++
}

/*
練習二
請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
*/
function print(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i)
    }
}

print(9)


/*
練習三：寫一個能夠印出 n 個 * 的函式
寫一個函式 star，接收一個參數 n，並印出 n 個 *
（禁止使用內建函式 repeat）
*/
function star(n) {
    var ans = ''
    for (var i = 1; i <= n; i++) {
        ans += '*'
    }
    console.log(ans)
}

star(3)

//String.prototype.repeat()
function star(n) {
    console.log('*'.repeat(n))
}

star(2)

/*
練習四：寫一個能回傳 n 個 * 的函式
請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。
*/
function star(n) {
    var ans = ''
    for (var i = 1; i <= n; i++) {
        ans += '*'
    }
    return ans
}

console.log(star(8))

/*
練習五：判斷大小寫
請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
*/
//solution 1
function isUpperCase(n) {
    var firstLetter = n.slice(0, 1)
    if (firstLetter >= 'A' && firstLetter <= 'Z') {
        return true
    } else {
        return false
    }
}

console.log(isUpperCase('Sbcd'))

//solution 2
function isUpperCase(n) {
    var firstLetter = n.slice(0, 1)
    if (firstLetter === firstLetter.toUpperCase()) {
        return true
    } else {
        return false
    }
}

console.log(isUpperCase('abcd'))

/*
練習六：回傳第一個大寫字母以及它的 index
請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。
*/
function position(n) {
    for (var i = 0; i < n.length; i++) {
        if (n[i] >= 'A' && n[i] <= 'Z') {
            return n[i] + ' ' + i
        } 
    }
    return -1
}

console.log(position('AbcD'))

//
function position(n) {
    var result = -1
    for (var i = 0; i < n.length; i++) {
        if (n[i] >= 'A' && n[i] <= 'Z') {
            result = n[i] + ' ' + i
            break
        } 
    }
    return result
    
}

console.log(position('abce'))

/*
練習七：回傳陣列裡面所有小於 n 的數的數量
請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。
*/
function findSmallCount(arr, n) {
    count = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < n) {
            count++
        }
    }
    return count
}

console.log(findSmallCount([1, 2, 3], 2))

/*
練習八：回傳陣列裡面所有小於 n 的數的總和
請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。
*/
function findSmallerTotal(arr, n) {
    sum = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < n) {
            sum += arr[i]
        }
    }
    return sum
}

console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))

/*
練習九：回傳陣列裡面所有小於 n 的數
請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。
*/
function findAllSmall(arr, n) {
    newArr = []
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < n) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(findAllSmall([1, 3, 5, 4, 2], 4))

/*
練習十：回傳陣列總和
請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
*/
function sum(arr) {
    sum = 0
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sum([-1, 1, 2, -2, 3, -3]))

//綜合題目練習Lv2
/*
練習一：好多星星
請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。
*/
function stars(n) {
    var ans = ''
    for(var i = 1; i <= n; i++) {
        ans += '*'
        console.log(ans)
    }
}

stars(5)

/*
練習二：好多星星 回傳版
請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
*/
//參數是否要設不一樣的？
function stars(n) {
    var ans = ''
    for(var i = 1; i <= n; i++) {
        ans += '*'
    }
    return ans
}

function makeStars(n) {
    var result = ''
    for (var i = 1; i <= n; i++) {
        result += stars(i)
        if (i !== n) {
            result += '\n'
        }
    }
    return result
}

//other solution
function stars(n) {
    var ans = ''
    for(var i = 1; i <= n; i++) {
        ans += '*'
    }
    return ans
}

function makeStars(n) {
    return Array(n).fill(0).map(function(value, index) {
        return star(index + 1)
    }).join('\n')
}

console.log(makeStars(4))

/*
練習三：好多星星 加強版
請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形。
*/
function stars(i) {
    var ans = ''
    for(j = 1; j <= i; j++) {
        ans += '*'
    }
    return ans
}

function stars2(n) {
    for (i = 1; i <= n; i++) {
        console.log(stars(i))
    }
    for (i = n-1; i > 0; i--) {
        console.log(stars(i))
    }
}

stars2(8)

/*
練習四：乘法表
請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果。
*/
function table(n) {
    for(i = 1; i <= 9; i++) {
        console.log(n + '*' + i + '=' + n*i)
    }
}

table(8)

/*
練習五：九九乘法表
請寫出一個 function table9to9，並列出 1*1 ~ 9*9
*/
function table9to9() {
    for(n = 1; n<=9; n++) {
        for(i = 1; i <= 9; i++) {
            console.log(n + '*' + i + '=' + n*i)
        }
        if(n !== 9) {
            console.log('\n')
        }
    }
}

table9to9()

/*
練習六：費式數列
費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ....
*/
function fib(n) {
    ans = ''
    if (n === 0) {
        ans = 0
    } else if (n === 1) {
        ans = 1
    } else {
        ans = fib(n-1) + fib(n-2) 
    }
    return ans
}

//better solution 1
function fib(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n-1) + fib(n-2)
}

//better solution 2 (best)
function fib(n) {
    var fib = [0, 1]
    for (var i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib[n]
}

console.log(fib(8))

/*
練習七：字串反轉
請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse)
*/
function reverse(n) {
    var ans = ''
    for(i = (n.length - 1); i >= 0; i--) {
        ans +=n[i]
    }
    return ans
}

console.log(reverse('12345aa'))


//array.reverse()
function reverse(arr) {
    arr.reverse()
    return arr
}


console.log(reverse(["Banana", "Orange", "Apple", "Mango"]))

/*
練習八：大小寫互換
請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串。
*/
function swap(str) {
    newStr = ''
    for (i = 0; i <= str.length; i++) {
        if(str[i] >= 'a' && str[i] <= 'z') {
            newStr += str[i].toUpperCase()
        } else if (str[i] >= 'A' && str[i] <= 'Z') {
            newStr += str[i].toLowerCase()
        }
    }
    return newStr
}

console.log(swap("AbCdE"))

/*
練習九：找出最小值
請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
*/
function findMin(arr) {
    var minValue = arr[0]
    for  (i = 0; i < arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i]
        }
    }
    return minValue
}
//array.sort()
function findMin(arr) {
    arr.sort()
    return arr[0]
}

console.log(findMin([1, 6, 0, 33, 44, 88, -10]))

/*
練習十：找出第 n 小的值
這題是上一題的加強版，上一題只要你找出最小值，而這一題請你寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）

提示：假設我要找出第 2 小的值，我只要先找出最小的值然後再把它刪掉，再重新找一次最小的值，就會是第 2 小的值了
*/
function findMin(arr) {
    var minValue = arr[0]
    var minIndex = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]
            minIndex = i
        }
    }
    return minIndex
}

function findNthMin(arr, nth) {
    for (var i = 1; i <= nth-1; i++) {
        var minIndex = findMin(arr)
        console.log('min', minIndex)
        arr.splice(minIndex, 1)
        console.log(arr)
    }
    var realMinIndex = findMin(arr)
    return arr[realMinIndex]
}

console.log(findNthMin([1, 8, 5, 7, 9, 2], 5))

//綜合題目練習Lv3
/*
練習一：排序
請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）

提示：如果你已經會找第 n 小的值了，試著把這個概念應用到這題上
*/
function sort(arr) {
    var ans = []
    for (i = (arr.length - 1); i >= 0; i--) {
        ans.push(arr[i])
    }
    return ans
}

console.log(sort([6, 8, 3, 2]))

/*
練習二：壓平陣列
請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
*/
function flatten (arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var flatArr = flatten(arr[i])
            flatArr.forEach(function(value) {
                result.push(value)
            })
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(flatten([1, 2, [1, 2], [1, 3], 6]))

/*
練習三：印出聖誕樹
請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹
*/
function tree(n) {
    printTop(n)
    printTrunk(n)

}

function printTop(n) {
    for (var i = 1; i <=n; i++) {
        console.log(' '.repeat(n-i) + '*'.repeat(2 *i -1))
    }
}

function printTrunk(n) {
    for (var i = 1; i <=n; i++) {
        console.log(' '.repeat(n-1) + '*')
    }
}

tree(3)

/*
練習四：判斷圈圈叉叉勝負
請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw
*/
function winner(arr) {
    var result = 'draw'
    for (var i = 0; i < 3; i++) {
        if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
            result = arr[i][0]
        } 
    }
    for (var i = 0; i < 3; i++) {
        if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
            result = arr[0][i]
        }
    }
    if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        result = arr[1][1]
    }
    if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        result = arr[1][1]
    }
    return result
}

console.log(winner([
    ['O', 'O', 'X'],
    ['O', 'O', 'X'],
    ['X', 'X', '']
    ]))

/*
練習五：判斷質數
請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
（質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）
*/
function isPrime(n) {
    var ans = true
    if (n === 1) {ans = false}
    if (n === 2) {ans = true}
    for ( var i = 3; i < n; i++) {
        if (n % 2 === 0) {
            ans = false
        } else if (n % i === 0) {
            ans = false

        }
    }
    return ans
}

console.log(isPrime(113))