let n = 100, s=0, k;

let text ="1<sup>2</sup> + 2<sup>2</sup> + ... + ";
text += n + "<sup>2</sup> = ";

for (k = 1; k <= n; k++) {
    s += k * k;
}
document.write(text+s);