for (var n = 100, s = 0, k = 1; k <= n; k++) {
    s += k * k;
}

let text = "1<sup>2</sup> + 2<sup>2</sup> + ... + ";
text += s+"<sup>2</sup> = ";

document.write(text + s);