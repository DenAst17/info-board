import { BaseDatabase } from "./base.database";

export class PostsCollection extends BaseDatabase{
    constructor(){
        super("posts");
    }
}