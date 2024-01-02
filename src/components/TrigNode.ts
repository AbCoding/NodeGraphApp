import { defineNode, NodeInterface, NumberInterface, SelectInterface } from "baklavajs";
export default defineNode({
    type: "TrigNode",
    inputs: {
        number: () => new NumberInterface("Number", 1),
        mode: () =>new SelectInterface("mode","Radian", ["Radian","Degree"]).setPort(false),
        operation: () => new SelectInterface("Operation", "Sin", ["Sin", "Cos","Tan","Csc","Sec","Cot"]).setPort(false),
        
    },

    outputs: {
        output: () => new NumberInterface("Output", 0),
    },
    calculate({ number, operation,mode }) {
        let output: number;
        if(mode=="Degree")
        {
            number= (number/180) *Math.PI;}
        
        switch(operation){
            case "Sin":
            output= Math.sin(number);
            break
            case "Cos":
            output= Math.cos(number);
            break
            case "Tan":
            output= Math.tan(number);
            break
            case "Csc":
            output= 1/ Math.sin(number);
            break
            case "Sec":
            output= 1/Math.cos(number);
            break
            case "Cot":
            output= 1/Math.tan(number);
            break
            default:
                output=0;

        }
        
        return {output};
        
    },
});