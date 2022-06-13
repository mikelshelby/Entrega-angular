import { ErrorHandler } from '@angular/core';
import { ControlatedError } from '@core/models/controlated-error.model';

export class CustomErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error(error.title, error.message, error.output);
  }
}
