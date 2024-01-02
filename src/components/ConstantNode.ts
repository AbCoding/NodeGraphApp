import { defineNode, NumberInterface, SelectInterface } from "baklavajs";
export default defineNode({
    type: "ConstantNode",
    inputs:{
        Constant: ()=> new SelectInterface("Constant", "pi", ["pi", "e","avogadro's number","Ideal gas constant"]).setPort(false),
    },
    outputs:{
        result: ()=> new NumberInterface("Value",3.14)
    },
    calculate({Constant}){
        let result: number;
        switch(Constant){
            case "pi":
                result=Math.PI
                break
            case "e":
                result= Math.E;
                break
            case "avogadro's number":
                result= 6.023*Math.pow(10,23);
                break
            case "Ideal gas constant":
                result=  0.082057
                break
            default:
                result=0;
        }

        return {result};

    }
   

    
})
