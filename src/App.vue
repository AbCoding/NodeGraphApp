<template>

  <div style="width: 90vw; height: 90vh">
      <baklava-editor :view-model="baklava" />
      
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EditorComponent, useBaklava } from "@baklavajs/renderer-vue";
import InputNode from "./components/InputNode";
import MathNode from "./components/MathNode"
import DisplayNode from "./components/DisplayNode";
import TrigNode from './components/TrigNode';
import AdvancedMathNode from "./components/AdvancedMathNode";
import ConstantNode  from "./components/ConstantNode";
import { Editor } from "@baklavajs/core";

import { DependencyEngine } from "@baklavajs/engine";

import { applyResult } from "@baklavajs/engine";

import "@baklavajs/themes/dist/syrup-dark.css";

export default defineComponent({
components: {
  "baklava-editor": EditorComponent,
},
methods:{
exec(){
  
  console.log(1)
}
},
setup() {



  
  const baklava = useBaklava();
  
 const engine = new DependencyEngine(baklava.editor);
 baklava.editor.registerNodeType(InputNode);
   baklava.editor.registerNodeType(AdvancedMathNode);
  baklava.editor.registerNodeType(MathNode);
  baklava.editor.registerNodeType(TrigNode);
  baklava.editor.registerNodeType(DisplayNode);
  baklava.editor.registerNodeType(ConstantNode);
  

  engine.start();
  const token = Symbol();
engine.events.afterRun.subscribe(token, (result) => {
engine.pause();
applyResult(result, baklava.editor);
engine.resume();
});
  return { baklava };
},

});

</script>