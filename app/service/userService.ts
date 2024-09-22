import { autoInjectable } from "tsyringe";
import { UserRepository } from "../repository/userRepository";
import { ErrorResponse, SuccessResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { plainToClass } from "class-transformer";
import { SignupInput } from "../models/dto/SignupInput";
import { AppValidationError } from "../utility/errors";
import { GetHashedPassword, GetSalt } from "../utility/password";

@autoInjectable()
export class UserService {
    repository: UserRepository;
    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    async CreateUser(event: APIGatewayProxyEventV2) {

        try {

            // * capturamos los datos y limpiamos para poder leerlos
            const input = plainToClass(SignupInput, event.body);
            // * realizamos la validacion de los datos que entran
            const error = await AppValidationError(input);
            if (error) return ErrorResponse(404, error);

            // ? validar correo existente

            // * encritamos password
            const salt = await GetSalt();
            const hashedPassword = await GetHashedPassword(input.password, salt);

            // * enviamos los datos al respositorio
            const data = await this.repository.CreateAccount({
                email: input.email,
                password: hashedPassword,
                salt: salt,
                phone: input.phone,
                userType: "COMPRADOR"
            });
            
            return SuccessResponse(data);
            
        } catch (error) {
            console.log('error: ', error);
            return ErrorResponse(500, error);
        }

    };

    async LoginUser(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from user login"});
    };

    async VerifyUser(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from verify user"});
    };

    // * user profile

    async CreateProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from create profile"});
    };

    async GetProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from get profile"});
    };

    async EditProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from edit profile"});
    };

    // * cart section

    async CreateCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from create cart"});
    };

    async GetCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from get cart"});
    };

    async EditCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from edit cart"});
    };

    // * payment section

    async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from create payment"});
    };

    async GetPaymentMethod(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from get payment"});
    };

    async EditPaymentMethod(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "Response from edit payment"});
    };
}