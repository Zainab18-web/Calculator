// alert("hello from external javascript file");

console.log("hello from external javascript file");
// ===== WELCOME ALERT =====
    function welcomeUser() {
        alert("Hi Everyone! My Name Is Zainab Sultan. Welcome To My Website ✨");
    }
    welcomeUser();
     // ===== SUM =====
    function doSum() {
        let num1 = document.getElementById("addNum1").value;
        let num2 = document.getElementById("addNum2").value;

        let sum = Number(num1) + Number(num2);

        console.log("Sum:", sum);
        document.getElementById("addResult").innerText = "Sum is: " + sum;
    }

    // ===== SUBTRACT =====
    function doSubtract() {
        let num1 = document.getElementById("subNum1").value;
        let num2 = document.getElementById("subNum2").value;

        let difference = Number(num1) - Number(num2);

        console.log("Difference:", difference);
        document.getElementById("subResult").innerText = "Difference is: " + difference;
    }

    // ===== MULTIPLY =====
    function doMultiply() {
        let num1 = document.getElementById("mulNum1").value;
        let num2 = document.getElementById("mulNum2").value;

        let product = Number(num1) * Number(num2);

        console.log("Product:", product);
        document.getElementById("mulResult").innerText = "Product is: " + product;
    }

    // ===== DIVIDE =====
    function doDivide() {
        let num1 = document.getElementById("divNum1").value;
        let num2 = document.getElementById("divNum2").value;
        let num2Value = Number(num2);

        let resultText = "";

        if (num2Value === 0) {
            resultText = "Error: Cannot divide by zero!";
            console.log("Division Error: divide by zero");
        } else {
            let quotient = Number(num1) / num2Value;
            resultText = "Quotient is: " + quotient.toFixed(4);
            console.log("Quotient:", quotient);
        }

        document.getElementById("divResult").innerText = resultText;
    }
    