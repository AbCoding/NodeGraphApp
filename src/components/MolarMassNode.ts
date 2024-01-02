import { defineNode, NodeInterface, NumberInterface, SelectInterface, TextInterface } from "baklavajs";


export default defineNode({
    type: "ChemicalProperties",
    inputs: {
        chemical: () => new TextInterface("Chemical","C"),
        operation: () => new SelectInterface("Operation", "MolarMass", ["MolarMass", "Subtract","Multiply","Divide"]).setPort(false),
    },
    
    outputs: {
        output: () => new NumberInterface("Output", 0),
    },
    
    calculate({ chemical, operation }) {
       
        let output: number;
        output=1;
       
        return { output };
    },
});