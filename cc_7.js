// Initial commit - JavaScript Functions Challenge Setup

// Task 1: Function Declaration
console.log("Task 1- Function Declaration");

function calculateInvoice(subtotal, taxRate, discount) { // Function to calulateInvoice

    let total = (subtotal + (subtotal * taxRate)) - discount; // Formula for calulating invoice

    return `Total Invoice: $${total.toFixed(2)}`; // return results 
}

// Logging test data outputs
console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"

// Task 2: Function Expression
console.log("\nTask 2- Function Expression");

const calculateHourlyWage = function(salary, hoursPerWeek) { // declaring function expression 
 
    const hourlyWage = salary / (hoursPerWeek * 52); // formula that caluclates hourly wage

    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; // return results

};

// Logging test data outputs
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"

// Task 3: Arrow Functions
console.log("\nTask 3- Arrow Functions");

const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate;
    if (years >= 5) {
        discountRate = 0.15;
    } else if (years >= 3) {
        discountRate = 0.10;
    } else {
        discountRate = 0.05;
    }
    const discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
}

// Logging test data output
console.log(calculateLoyaltyDiscount(100,6));  // Expected output: discounted price 85.00
console.log(calculateLoyaltyDiscount(200,2));  // Expected output: discounted price 190.00


//Task 4: Parameters and Arguments
console.log("\nTask 4- Parameters and Arguments");

function calculateShippingCost(weight, location, expedited = false) { // 
    let baseCost;
    let perLbCost;
    
    if (location === "USA") {  // if USA base 5,lb 0.5
        baseCost = 5;
        perLbCost = 0.5;
    } else if (location === "Canada") { // if Canada base 10, lb 0.7
        baseCost = 10;
        perLbCost = 0.7;
    } else {
        return "Invalid location";
    }
    
    let totalCost = baseCost + (perLbCost * weight); // function calulate shipping cost
    
    if (expedited) {
        totalCost += 10; // + 10 if expedited
    }
    
    return `Shipping Cost: $${totalCost.toFixed(2)}`; // return results
}

// Logging test data cases
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"


// Task 5: Returning Values
console.log("\nTask 5- Returning Values");

function calculateLoanInterest (principal, rate, years) { // function to return total interest
    let interest = principal * rate * years;
    console.log(`Total Interest: $${interest.toFixed(2)}`);
}

// Logging test data output
calculateLoanInterest(1000, 0.05, 3);//Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5);//Expected output: "Total Interest: $1750.00"

//Task 6: Higher Order Functions
console.log("\nTask 6- Higher Order Functions");

let transactions = [500, 1200, 3000, 800, 2200]; // declaring an array 'transactions'

const filterHighValueTransactions = (transactions, filterFunction) => { // higher order function that filters transactions above $1000
    console.log(transactions.filter(filterFunction));
};
//Logging test data output
filterHighValueTransactions(transactions, amount => amount > 1000); //Expected output: [1200, 3000, 2200]

// Task 7: Closures
console.log("\nTask 7- Closures");

function createBudgetTracker() { // function that keeps a running balance
    let balance = 0;
    return function(expense){
        balance -= expense;
        console.log(`Current Balance: -$${Math.abs(balance)}`);
    };
}
//Logging test data output
let budget = createBudgetTracker();
budget(300);//Expected output: "Current Balance: -$300"
budget(200);//Expected output: "Current Balance: -$500"