import { LightningElement, wire, api } from 'lwc';
import getMeta from '@salesforce/apex/ShowMeta.getMeta';
import start from '@salesforce/apex/StartBatch.start';
export default class Check extends LightningElement {

    checkboxes
    showtext = false
    
    success

    inputsCheck = new Array()

    
    disabled = true
    
    startBatch(){
        start().then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    

    @wire(getMeta) results({error, data}){
        if(data){
            this.checkboxes = data
        }
        if(error){}
    }


     show(event){
        console.log(this.checkboxes)
        
        if(this.showtext == false){
            this.showtext = true
        } else {
            this.showtext = false
        }
     }

     checkIftrue(){
        const inputs = this.template.querySelectorAll('lightning-input')
        if(this.inputsCheck.length == inputs.length){
            this.disabled = false

        }else{
            this.disabled = true
        }
    } 
    
    check(event){
        
        this.value = event.target.value;
        if(this.inputsCheck.includes(this.value)){
            var i = this.inputsCheck.indexOf(this.value)
            this.inputsCheck.splice(i, 1);
        }else{
            this.inputsCheck.push(this.value)
            this.checkIftrue()
        }
        
     }
}