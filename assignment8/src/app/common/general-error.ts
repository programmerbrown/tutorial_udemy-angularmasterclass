import { ErrorHandler } from '@angular/core';

export class GeneralError implements ErrorHandler {
    
    constructor(public originalError?: any) { }
    
    handleError(error) {
        console.log(error);
    }
}