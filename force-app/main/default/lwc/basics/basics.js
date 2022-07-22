import { LightningElement,track } from 'lwc';

export default class Basics extends LightningElement {
    name='Sprutiraj ';
    handlecall(event){
        this.name = 'SFDC CLOUD PLAY';
    }
    @track num1;
   @track num2;
  @track  num3;
  @track Amo1;
  @track term01;
  @track rate01;
  @track currentOutput;
  @track out;
    firstNum(event){
this.num1 = event.target.value;
    }
    secondtNum(event){
        this.num2 = event.target.value;

    }
    thirdtNum(event){
        this.num3 = event.target.value;

    }
    Amount(event){
        this.Amo1 = parseInt(event.target.value);
    }
    term(event){
        this.term01 = parseInt(event.target.value);
    }
    Rate(event){
        this.rate01 = parseInt(event.target.value);
    }
    
    calculate(){
        this.currentOutput =  'The interest accumulated is :' + (this.Amo1*this.rate01*this.term01)/100;
 this.out = 'The total amount at maturity is :'+ this.Amo1*1+this.rate01*this.term01;
    }
    clear(){
        this.Amo1 ='';
        this.rate01='';
        this.term01='';
    }
    calculateme(event){
        const a =parseInt(this.num1);
        const b =parseInt(this.num2);
        const c =parseInt(this.num3);
if(a>b & a>c){
    alert ('the greater number is '+a);
}
else if(b>c & b>a){
    alert('the greate number is '+b);
}
else{
    alert('the greate number is '+c);
}
    }
    clearme(event){
this.num1 = '';
this.num2='';
this.num3='';
    }
}