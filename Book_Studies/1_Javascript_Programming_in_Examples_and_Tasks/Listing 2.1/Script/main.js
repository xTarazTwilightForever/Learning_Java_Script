let userName;

userName=prompt("Let's get acquainted, shall we? What's your name?", "");

if (userName=="") {
    document.write("It's a pity you didn't introduce yourself. ");
}

else {
    document.write(`Nice to meet you, ${userName}!`);
}