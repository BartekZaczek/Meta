import { LightningElement, wire, api } from 'lwc';
import getMeta from '@salesforce/apex/ShowMeta.getMeta';
import start from '@salesforce/apex/StartBatch.start';
export default class Check extends LightningElement {

    checkboxes
    showtext = false
    
    success

    checbox1 = false
    checbox2 = false
    checbox3 = false
    checbox4 = false
    

    
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
        if(this.checbox1 == true && this.checbox2 == true && this.checbox3 == true && this.checbox4 == true){
            console.log('every true');
            this.disabled = false

        }else{
            console.log('not every true');
        }
    } 
    
    c(event){
        console.log(this.template.querySelectorAll('lightning-input'));
        this.value = event.target.value;
        if(this.value == 'Question1'){
            if(this.checbox1 == false){
                this.checbox1 = true
                console.log(1)
                this.checkIftrue()
            }else{
                this.checbox1 = false
            }
        }
        if(this.value == 'Question2'){
            if(this.checbox2 == false){
                this.checbox2 = true
                console.log(2)
                
            }else{
                this.checbox2 = false
            }
            this.checkIftrue()
        }
        if(this.value == 'da'){
            if(this.checbox3 == false){
                this.checbox3 = true
                console.log(3)
                
            }else{
                this.checbox3 = false
            }
            this.checkIftrue()
        }
        if(this.value == 'question4'){
            if(this.checbox4 == false){
                this.checbox4 = true
                console.log(4)
               
            }else{
                this.checbox4 = false
            }
            this.checkIftrue()
        }if(this.value == 'Question5'){
            if(this.checbox3 == false){
                this.checbox3 = true
                console.log(3)
                
            }else{
                this.checbox3 = false
            }
            this.checkIftrue()
        }

        
     }
}