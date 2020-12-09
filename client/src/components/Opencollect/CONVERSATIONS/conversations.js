import React,{Component} from 'react';

class conversations extends Component{
    render(){
        return(
            <div className="Contribute_Conversations">
                    <h2>Conversations</h2>
                    <div className="Conversations_sub">
                        <p>
                           Let’s get the ball rolling! This is where things get planned and sometimes 
                           this is where things get done. Ask questions, 
                           thank people for their efforts, 
                           and contribute your skills to the service of the community.
                        </p>

                        <button className="Conversations_btn">
                            Create conversation
                        </button>
                    </div>
                <div className="Conversations_body_list">
                    <div className="Conversations_body">
                        <img src="https://images.opencollective.com/dontia-moore2/1acfb74/avatar.png"/>
                        <div className="Conversations_body_content">
                            <h5>Im not entirely sure on how to proceed</h5>
                            <p>Published on <a>Dontia Moore</a></p> 
                            <p>Im not entirely sure on how to proceed or what exactly to report,can i get an overview ?</p>
                            <img src="https://images.opencollective.com/dontia-moore2/1acfb74/avatar.png"/>
                        </div>
                    </div>
                    <div className="Conversations_body">
                        <img src="https://images.opencollective.com/william-pate/957fff9/avatar.png"/>
                        <div className="Conversations_body_content">
                            <h5>Love this idea!</h5>
                            <p>Published on December 20, 2019 by <a>William Pate</a></p> 
                            <p>Im not entirely sure on how to proceed or what exactly to report,can i get an overview ?</p>
                            <img src="https://images.opencollective.com/william-pate/957fff9/avatar.png"/>
                        </div>
                    </div>
                    <div className="Conversations_body">
                        <img src="https://images.opencollective.com/znarf/e534a60/avatar.png"/>
                        <div className="Conversations_body_content">
                            <h5>Feedback on conversations</h5>
                            <p>Published on <a>Dontia Moore</a></p> 
                            <p>Im not entirely sure on how to proceed or what exactly to report,can i get an overview ?</p>
                            <img src="https://images.opencollective.com/dontia-moore2/1acfb74/avatar.png"/>
                        </div>
                    </div>
                </div>
                <button className="Contribute_btn">
                        View all conversations →
                    </button>
                </div>
        )
    }
}

export default conversations