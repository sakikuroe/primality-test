let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function is_prime(n) {
    if (n <= 1) {
        return false;
    }

    let i = 2;
    while (i * i <= n) {
        if (n % i == 0) {
            return false;
        }
        i++;
    }
    return true;
}

function factorization(n) {
    let res = '';
    let i = 2;
    let f = true;
    while (i * i <= n) {
        while (n % i == 0) {
            if (f) {
                f = false;
                res = res + i;
            } else {
                res = res + ' * ' + i;
            }
            n /= i;
        }
        i += 1;
    }

    if (n != 0 && n != 1) {
        if (f) {
            f = false;
            res = res + n;
        } else {
            res = res + ' * ' + n;
        }
    }

    return res;
}

function determine_prime() {
    let number = document.getElementById("io").value;
    if (isNaN(number)) {
        myHeading.textContent = 'Please input an integer value.';
    } else if (is_prime(number)) {
        myHeading.textContent = number + ' is a prime number.';
    } else {
        myHeading.textContent = number + ' is not a prime number.';
        if (number > 1) {
            myHeading.textContent += ' ' + number + ' = ' + factorization(number);
        }
    }
}

myButton.onclick = function() {
    determine_prime();
}