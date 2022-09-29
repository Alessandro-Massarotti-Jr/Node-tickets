import bcrypt from "bcrypt"
import jwt, { Secret } from "jsonwebtoken";
import { LoginDataInterface } from "../../Controllers/AuthController";
import { UserInterface } from "../../Models/UserModel";

const jwt_secret = process.env.JWT_SECRET;

export class LoginService {
    public static async execute(loginData: LoginDataInterface, userData: UserInterface) {

        const checkPassword = await bcrypt.compare(loginData.password, userData.password);

        if (!checkPassword) {
            return { error: true, message: 'Senha invalida', developerMessage: 'invalid password', data: null, statusHTTP: 400 };
        }

        const jwt_data = {
            id: userData.id,
            name: userData.name,
            email: userData.email,
        }

        const jwt_token = jwt.sign(jwt_data, jwt_secret as Secret)

        return { error: false, message: 'Login realizado com sucesso', developerMessage: 'login successs', data:{token:jwt_token,user:jwt_data}, statusHTTP: 200 }

    }

}