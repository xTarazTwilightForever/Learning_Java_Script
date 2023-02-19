var n = 100, s = 0, k = 1; 

let text = "1<sup>2</sup> + 2<sup>2</sup> + ... + ";
text += n+"<sup>2</sup> = ";

for (;k <= n;) {
    s += k * k;
    k++;
}

document.write(text + s);
