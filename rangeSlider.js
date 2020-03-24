import { LightningElement,track } from 'lwc';

export default class RangeSlider extends LightningElement { 
    @track minRange = 30;
    @track maxRange = 70;
    handleInput(event) {
        this[event.target.name] = event.target.value;
        if (event.target.name === 'minRange' && this.minRange > this.maxRange) { 
            this.minRange = this.maxRange;   
        } else if (event.target.name === 'maxRange' && this.minRange > this.maxRange) {
            this.maxRange = this.minRange;     
        } 
    }
}