function show(x, y, op) {
    let message;

    switch(op) {
        case "amount":
            message= x + " + " + y + " = " + (x + y) + "<br>";
            break;

        case "difference": 
            message= x + " - " + y + " = " + (x - y) + "<br>";
            break;

        case "product": 
            message= x + " * " + y + " = " + (x - y) + "<br>";
            break;

        case "privately": 
            message= x + " / " + y + " = " + (x - y) + "<br>";
            break;

        default: 
         message = "<b>" + op + "</b> - Unknown operation <br>"; 
    }

    document.write(message);
}
show(8,4, "amount");
show(8,4, "difference");
show(8,4, "product");
show(8,4, "privately");
show(8,4, "Spooky!");
