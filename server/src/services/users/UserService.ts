import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {User} from "../../models/user/User";
import {Credential} from "../../models/user/Credential";
import { userInfo } from 'os';
@Service()
export class UserService {
    @Inject(User)
    private User: MongooseModel<User>;
    /**
     * Find a User by his ID.
     * @param id
     * @returns {undefined|User}
     */
    async find(id: string): Promise<User | null>{
        const User = await this.User.findOne({email:id});
        
        return User;
        
    }
    async save(User: User): Promise<User> {
        const model = new this.User(User);
        await model.save(function(err,User){
            if(err) return console.error(err);
            console.log(User);
        })
        return model;
    }
    async update(User: User): Promise<User> {
        const model = new this.User(User);
        await model.update(
            {token: model.token}
        )
        return model;    
    }
    // async findOne(id: string): Promise<Credential | null>{
    //     const Credential = await this.User.findOne({email:id});
        
    //     return Credential;
        
    // }
    attachToken(user: User, token: string) {
    user.token = token;
  }
    
}