import { defineNode, NodeInterface, NumberInterface, SelectInterface } from "baklavajs";

export default defineNode({
    type: "AdvancedMathNode",
    inputs: {
        number1: () => new NumberInterface("Number", 1),
        number2: () => new NumberInterface("Number", 1),
        operation: () => new SelectInterface("Operation", "Add", ["Add", "Subtract","Multiply","Divide"]).setPort(false),
    },
    
    outputs: {
        output: () => new NumberInterface("Output", 0),
    },
    
    calculate({ number1, number2, operation }) {
       
        
        let output: number;
        if (operation === "Add") {
            output =number1+number2
        } else if (operation === "Subtract") {
            output = number1 - number2;
        } else if (operation === "Multiply") {
            output = number1 * number2;
        } else if (operation === "Divide") {
            output = number1 / number2;
        } else {
            throw new Error("Unknown operation: " + operation);
        }
       
        return { output };
    },
});