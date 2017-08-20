
export class LikeComponent {

    constructor(private _likesCount: number, private _isSelected: boolean ) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;

        if(this._isSelected)
            console.log(`The number of likes is ${this._likesCount} and is selected.`);
        else
            console.log(`The number of likes is ${this._likesCount} and is not selected.`);            
    }

    clickLikeButton() {
        this._likesCount += !(this._isSelected) ? 1 : -1;
        this._isSelected = !this._isSelected;

        if(this._isSelected)
            console.log(`The number of likes is ${this._likesCount} and is selected.`);
        else
            console.log(`The number of likes is ${this._likesCount} and is not selected.`);  
    }
}