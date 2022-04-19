import { BaseDatabase } from "./base.database";

export class UsersCollection extends BaseDatabase{
    constructor(){
        super("users");
    }
}