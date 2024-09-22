export interface UserModelUtility {
    email: string;
    password: string;
    salt: string;
    phone: string;
    userType: "COMPRADOR" | "VENDEDOR";
}