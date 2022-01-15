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

function determine_prime() {
    let number = document.getElementById("io").value;
    if (isNaN(number)) {
        myHeading.textContent = 'Please input an integer value.';
    } else if (is_prime(number)) {
        myHeading.textContent = number + ' is a prime number.';
    } else {
        myHeading.textContent = number + ' is not a prime number.';
    }
}

myButton.onclick = function() {
    determine_prime();
}