import {CustomError} from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    reason = 'Failed to connect db';
    statusCode = 500;
    constructor() {
        super('Failed to connect db');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }

    serializeErrors(){
        return [
            {
                message: this.reason
            }
        ]
    }
}