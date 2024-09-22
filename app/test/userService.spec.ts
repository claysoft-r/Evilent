// import { describe, test, expect } from "@jest/globals"
// import supertest from 'supertest';
// const request = supertest('http://localhost:3000');
// import { CreateUser } from "./userServiceTest";

import { Multiplos } from "./userServiceTest";

// describe("UserService", () => {

//     test('deberia haber una funcion', () => {
//         expect(typeof CreateUser).toBe('function');
//     });

//     test('deberia enviar un error si no devuelve un valor', async () =>  {
//         expect(await CreateUser(1)).toBe(1);
//         expect(await CreateUser(2)).toBe(2);
//     });

//     test('deberia enviar un error si el valor es vacio', async () => {
//         await expect(CreateUser('')).rejects.toThrow('URL cannot be empty');
//     });

//     supertest
//     test('should return a 200 status and a message using Supertest', async () => {
//         const response = await request.post('/login');
//         expect(response.statusCode).toBe(200);
//         expect(response.body.message).toBe('Response from user login');
//     });

// });

describe('ExampleMultiplos', () => {
    test.skip('verificamos si hay funcion', () => {
        expect(typeof Multiplos).toBe('function');
    });

    test.skip('verificamos que los datos no esten vacios', () => {
        expect(() => Multiplos(null)).toThrow("No se puede campos vacios");
        expect(() => Multiplos(NaN)).toThrow("No se puede campos vacios");
        expect(() => Multiplos(undefined)).toThrow("No se puede campos vacios");
    });

    test.skip('verificamos el dato que recibimos solo sea numero', () => {
        expect(() => Multiplos('3')).toThrow("Solo se pueden numeros");
        expect(() => Multiplos(true)).toThrow("Solo se pueden numeros");
    });

    test('verificamos la funcion devuelva el valor', () => {
        expect(Multiplos(1)).toBe(1);
        expect(Multiplos(2)).toBe(2);
    });

    test('verificamos si devuelve "fizz" cuando el valor es 3', () => {
        expect(Multiplos(3)).toBe('fizz');
    });

    test('verificamos si devuelve "fizz" cuando el valor es multiplo de 3', () => {
        expect(Multiplos(3)).toBe('fizz');
        expect(Multiplos(6)).toBe('fizz');
        expect(Multiplos(9)).toBe('fizz');
    });

    test('verificamos si devuelve "buzz" cuando el valor es multiplo de 5', () => {
        expect(Multiplos(5)).toBe('buzz');
        expect(Multiplos(10)).toBe('buzz');
        //expect(CreateUser(15)).toBe('buzz');
    });

    test('verificamos si devuelve "fizzbuzz" cuando el valor es multiplo de 3 y de 5"', () => {
        expect(Multiplos(15)).toBe('fizzbuzz');
    });

});