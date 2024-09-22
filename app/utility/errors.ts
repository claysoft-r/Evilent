import { validate, ValidationError } from "class-validator";

// validaciones para los datos de entrada
export const AppValidationError = async (input: any): Promise<ValidationError[] | false> => {
    const error = await validate(input, {
        ValidationError: { target: true },
    });

    if (error.length) {
        return error;
    }
    return false;
};