const forms = document.querySelectorAll("form");
forms.forEach(form => { 
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});
let a = [];
function b0(){ 
    const input = document.getElementById("input__form").value;
    a.push(Number(input));
    document.getElementById("start__array").innerHTML = `${a}`;
    console.log(a);
}

function b1() { 
    let sum = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i] >= 0) { 
            sum += Number(a[i]);
        }
    }
    document.getElementById("result").innerHTML = sum;
}

function b2() { 
    let sum = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i] >= 0) { 
            sum++;
        }
    }
    document.getElementById("result").innerHTML = sum;
}

function b3() { 
    let sum = a[0];
    for (let i = 1; i < a.length; i++) { 
        if (a[i] < sum) {
            sum = Number(a[i]);
        }
    }
    document.getElementById("result").innerHTML = sum;
}

function b4() { 
    let sum = null;
    for (let i = 1; i < a.length; i++) {
        if (a[i] >= 0) {
            if (sum === null || a[i] < sum) { 
                sum = a[i];
            }
        }
    }
    document.getElementById("result").innerHTML = sum;
}

function b5() { 
    let sum = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            sum = a[i];
        }
    }
    document.getElementById("result").innerHTML = sum;
}

function b6() {
    let i1 = document.getElementById("index1").value * 1;
    let i2 = document.getElementById("index2").value * 1;
    if (i1 > a.length || i2 > a.length) {
        document.getElementById("result").innerHTML = `index phải bé hơn length của array`;
    } else { 
        let tmp = a[i1];
        a[i1] = a[i2];
        a[i2] = tmp;
    }
    document.getElementById("result").innerHTML = a;
}

function b7() {
    for (let i = 0; i < a.length - 1; i++) { 
        for (let j = 0; j < a.length - i - 1; j++ ) { 
            if (a[j] > a[j + 1]) { 
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }
    }
    document.getElementById("result").innerHTML = a;
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function b8() {
    let r = 0;
    for (let i = 0; i < a.length; i++) {
        if (isPrime(a[i])) {
            r = a[i];
            break;
        }
    }
    document.getElementById("result").innerHTML = r;
}

function b9() {
    let c = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i] > 0) { 
            c++;
        }
    }
    document.getElementById("result").innerHTML = c;
}

function b10() {
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i] > 0) {
            c1++;
        } else { 
            c2++;
        }
    }
    let content = (c1 > c2) ? "số dương > số âm" : "số dương < số âm";
    document.getElementById("result").innerHTML = content;
}