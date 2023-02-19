function f(x) {
    if (x < 0) {
        return 0;
    } else {
        if(x < 2){
            return x*x; 
        } else {
            if (x < 5) {
                return 6-x;
            } else {
                return 1;
            }
        }
    }
}
document.write("<h4>Piecewise smooth function</h4>");
document.write('<img src="../Listing 2.3/img/function.png" width="500" height="300"><br>');

let z = 9*Math.random()-2;


document.write("Random Argument: <b>"+f(z)+"</b>");

document.write(" Meaning of the function: <b>"+f(z)+"</b>");

