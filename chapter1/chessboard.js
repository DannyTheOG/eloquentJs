/*
console log the chessboard below
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #
# # # # # 
 # # # # #

*/

let n = 10;
let chess = "";

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
        if ((i + j) % 2 == 0) chess += " ";
        else chess += "#";
    }
    chess += "\n";
}

console.log(chess);
