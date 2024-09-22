import middy from "@middy/core";
import { UserService } from "../service/userService";
import { ErrorResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import bodyParser from '@middy/http-json-body-parser';
import { container } from "tsyringe";

const service = container.resolve(UserService);

export const Signup = middy((event: APIGatewayProxyEventV2, context) => {

    // mongodb reutilizar solicitudes
    context.callbackWaitsForEmptyEventLoop = false;

    return service.CreateUser(event);

}).use(bodyParser());

export const Login = async (event: APIGatewayProxyEventV2) => {

    console.log('Hola Mundo');

    return service.LoginUser(event);
};

export const Verify = async (event: APIGatewayProxyEventV2) => {

    return service.VerifyUser(event);
};

export const Profile = async (event: APIGatewayProxyEventV2) => {
    // post // put // get
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === "POST") {
        // * logica de negocio
        return service.CreateProfile(event);
    } else if (httpMethod === "PUT") {
        return service.EditProfile(event);
    } else if (httpMethod === "GET") {
        return service.GetProfile(event);
    } else {
        return ErrorResponse(404, "Invalid HTTP method!")
    }
};

export const Cart = async (event: APIGatewayProxyEventV2) => {
    // post // put // get
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === "POST") {
        // * logica de negocio
        return service.CreateCart(event);
    } else if (httpMethod === "PUT") {
        return service.EditCart(event);
    } else if (httpMethod === "GET") {
        return service.GetCart(event);
    } else {
        return ErrorResponse(404, "Invalid HTTP method!")
    }
};

export const Payment = async (event: APIGatewayProxyEventV2) => {
    // post // put // get
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === "POST") {
        // * logica de negocio
        return service.CreatePaymentMethod(event);
    } else if (httpMethod === "PUT") {
        return service.EditPaymentMethod(event);
    } else if (httpMethod === "GET") {
        return service.GetPaymentMethod(event);
    } else {
        return ErrorResponse(404, "Invalid HTTP method!")
    }
};