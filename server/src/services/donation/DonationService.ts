import {Inject, Service} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Donation} from "../../models/donation/Donation";
@Service()
export class DonationService {
    @Inject(Donation)
    private Donation: MongooseModel<Donation>;


    /**
     * Find a User by his ID.
     * @param id
     * @returns {undefined|Donation}
     */
    async find(id: string): Promise<Donation | null> {
        const model = await this.Donation.findById(id).exec();
					return model;

					}

    /**
     * Find a User by his ID.
     * @param donation
     * @returns {undefined|Donation}
     */
    async save(donation: Donation): Promise<Donation> {
        const model = new this.Donation(donation);
        await model.save(function(err,donation){
            if(err) return console.error(err);
            console.log(donation);
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
