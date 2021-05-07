<template>
  <RightList :list="list" @select="hanleSelect"/>
</template>

<script>
import RightList from "./RightList";
export default {
    components:{
        RightList,
    },
    data(){
        return{
            list:[
                {name:"a", isSelect:false},
                {name:"b", isSelect:false},
                {name:"c", isSelect:true, children:[
                    {name:"c1",isSelect:false},
                    {name:"c2",isSelect:false},
                    {name:"c3",isSelect:false, children:[
                        {name:"c3-1",isSelect:false},
                        {name:"c3-2",isSelect:false},
                        {name:"c3-3",isSelect:false},
                        {name:"c3-4",isSelect:false},
                    ]},
                    {name:"c4",isSelect:false},
                ]},
                {name:"d", isSelect:false},
            ]
        }
    },
    methods:{
        hanleSelect(item){
            console.log(item);
        }
    }
}
</script>

<style>

</style>