import { UserModel } from "../models/UserModel";
import { DBClientConnnect } from "../config/databaseClient";
import { UserModelUtility } from "../utility/models";

export class UserRepository {
    constructor() {}

    async CreateAccount({ email, password, salt, phone, userType } :UserModelUtility) {

        await DBClientConnnect();

        const createAccount = await UserModel.create({
            email: email,
            password: password,
            salt: salt,
            phone: phone,
            userType: userType
        });

        if (createAccount !== null) {
            return  createAccount as UserModelUtility;
        }

    }

}