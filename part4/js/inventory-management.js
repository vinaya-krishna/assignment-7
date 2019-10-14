/*eslint-env browser*/
function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all products");
    window.console.log("update - Update an existing products inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}


function display(product_list) {
    "use strict";

    product_list.sort(function(product_1,product_2) {
        return product_1[0]-product_2[0]
    });

    product_list.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}

function update(product_list){
    "use strict";
    var choosed_product = null;
    
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
   

    product_list.forEach(function (product){
        if(product[0] === skuNumber){
            choosed_product = product;
        }
    });

    if(choosed_product != null) {
        if(!isNaN(quantity)){
            choosed_product[2] = quantity;
            window.console.log("Quantity updated!");
        }
        else {
            window.console.log("Quantity should be valid number!");
        }
    }
    else{
        window.console.log("Product with sku number:" + skuNumber + " not found"); 
    }
}




function main() {
    "use strict";
    var product_list = [[4824, "Shirt", 10, 15.99],[6343, "Jeans", 22, 39.99],[3223, "Socks", 36, 9.99],[2233, "Hat", 12, 14.99],[9382, "Jacket", 5, 49.99]];
    
    display_menu();
    var quit = false;

    while(!quit){
        var command = window.prompt("Enter command");
        if(command !== null){
            switch(command){
                case "show":
                    display(product_list);
                    break;
                case "update":
                    update(product_list);
                    break;
                case "exit":
                    quit = true;
                    break;
                default:
                    window.alert("Invalid Command");
                    break;
            }
        }else {
            break;
        }
    }
    window.console.log("Good bye");
}

main();