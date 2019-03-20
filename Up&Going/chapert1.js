// You Don't Know JS \\

   //Up and Going\\

//Practice chapter 1. 

/* Write a program to calculate the total price of your phone purchase.You will keep purchasing phones(hint: loop!) until you run out of money in your bank account.You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

* After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if you can afford it or not.

* You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.

**Bonus Challenge: Try to incorporate input into this program, with the prompt(..) covered in "Input" earlier.You may prompt the user for their bank account balance, for example.Have fun and be creative! */ 



const TAX_RATE = 0.08; // 8% 
const PHONE_PRICE = 99.99; 
const ACCESSORY_PRICE = 9.99; 
const SPENDING_THRESHOLD = 200;

let bankAccountBalance = prompt("Account Balance:  ");
let amount = 0;

function adTax() {
    amount = amount + (amount * TAX_RATE);
    return amount;
}

function formatPurchaseAmount() {
    return "$" + amount.toFixed(2);
}

 while (amount < bankAccountBalance) {

    amount = amount + PHONE_PRICE;

    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;
    }
}

amount = adTax();
console.log("Total price of your purchase is: " + formatPurchaseAmount(amount));

if (amount < bankAccountBalance) {
    console.log("Yeeh, you can buy that many phones!");
} else {
    console.log("You don't have enough money.");
}

