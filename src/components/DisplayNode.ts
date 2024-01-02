import { defineNode, NodeInterface, NumberInterface, SelectInterface, TextInputInterface, TextInterface } from "baklavajs";

export default defineNode({
    type: "DisplayNode",
    inputs:{
        num1: ()=> new NumberInterface("Number",0)
    

    },
    outputs:{
        result: ()=> new TextInterface("Output","0")
    },
    calculate(inputs){
        
        const x= inputs.num1.toFixed(5).toString()

        
        return {result: x}
    }

})
