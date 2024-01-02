import { defineNode, NumberInterface, SelectInterface } from "baklavajs";
export default defineNode({
    type: "InputNode",
    inputs:{
        num: ()=> new NumberInterface("Number", 1).setPort(false),
        
    },
    outputs:{
        result: ()=> new NumberInterface("Value",0).setComponent(false)
    },
    calculate({num}){
        let result: number = num;
        result=num;

        return {result};

    }
   

    
})
