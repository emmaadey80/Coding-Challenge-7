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