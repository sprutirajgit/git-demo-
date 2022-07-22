import { LightningElement,track } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
export default class Programatically extends LightningElement {
    @track name;
    @track phone;
    @track email;
   

    callme(event){
        this.name = event.target.value;
    }
    callph(event){
        this.name = event.target.value;
    }
    callEma(event){
        this.name = event.target.value;
    }
  
    callMeOp(){
        const fields={'Name':this.name,'Phone':this.phone,'Email':this.email};
        const recordData={apiName:'Account',fields};
        createRecord(recordData).then(response=>{
            alert('Account was created successfully with Account Id:'+response.id);
        }).catch(error=>{
            alert('Record creation was falied:'+error.body.message);
        });
    }
}   