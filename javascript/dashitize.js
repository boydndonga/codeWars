// Given a number, return a string with dash'-'marks before and
// after each odd integer, but do not begin or end the string with a dash mark.
// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    var c = '';
    var firstIndex = 0;
    var lastIndex = 18;
    var d =''
    for(var i=0;i<num.length;i++){
        if( num[i] % 2 != 0){
            c+='-'
            c+=num[i]
            c+='-'
        }else{
            c += num[i]
        }
    }
    d = c.substr(0, lastIndex) + '' + c.substr(lastIndex + 1)
    
    console.log(d = c.substr(0, firstIndex) + '' + c.substr(firstIndex + 1))
  };


// function final(arg){
//     if (arg[0] == '-' && arg[arg.length-1] == '-') {
//         arg.slice(0) 
//         arg.slice(arg.length-1)
//         return arg
//     }else if(arg[0] == '-'){
//         arg.slice(0)
//         return arg
//     }else if(arg[arg.length-1] == '-'){
//         arg.slice(arg.length-1)
//         return arg
//     }else{
//         return arg
//     }
// }

dashatize("123456789")