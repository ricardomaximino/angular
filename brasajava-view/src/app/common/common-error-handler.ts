import { ErrorHandler } from '@angular/core';


export class CommonErrorHandler implements ErrorHandler {

    handleError(error) {
        // alert('Unexpected error occurred.');
        console.log(error);
    }

}
