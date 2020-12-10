import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Group} from "../../models/group/Group";
@Service()
export class GroupService {
    @Inject(Group)
    private Group: MongooseModel<Group>;
    /**
     * Find a User by his ID.
     * @param id
     * @returns {undefined|Group}
     */
    async find(id: string): Promise<Group | null> {
        const model = await this.Group.findById(id).exec();
					return model;

					}

    /**
     * Find a User by his ID.
     * @param group
     * @returns {Promise<TResult|TResult2|Group}
     */
    async save(group: Group): Promise<Group> {
        const model = new this.Group(group);
        await model.save(function(err,group){
            if(err) return console.error(err);
            console.log(group);
        })
        return model;
    }
    /*async update(User: User): Promise<User> {
        const model = new this.User(User);
        await model.update(
            {token: model.token}
        )
        return model;
    }
    // async findOne(id: string): Promise<Credential | null>{
    //     const Credential = await this.User.findOne({email:id});

    //     return Credential;

    // }*/

}
