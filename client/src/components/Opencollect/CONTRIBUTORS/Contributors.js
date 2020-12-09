import React,{Component} from 'react';
import contributionsLogo1 from "../../../assets/Opencolleclog/logo (1).png"  
import contributionsLogo2 from "../../../assets/Opencolleclog/logo (3).png" 
import contributionsDate from "../../../assets/Opencolleclog/Dateimg.png"
import contributionsTime from "../../../assets/Opencolleclog/Timeclock.png" 

class Contributors extends Component{
    render(){
        return(
            <div className="container_Convers">
                    <h3>Financial contributions</h3>
                    <div className="contributions_Elements">
                        <div className="contributions_El">
                            <div className = "contributions_El_head">
                                <a>CUSTOM CONTRIVUTION</a>
                            </div>
                            <div className = "contributions_El_body">
                                <p>Donation</p>
                                <span>Make a custom one time or recurring contribution.</span>
                            </div>
                            <button className="contributions_btn">
                                Contribute
                            </button>
                            <div className="contributions_foot">
                                <div className="contributions_img">
                                    <img src="https://images.opencollective.com/gcvp/75ecf40/logo.png"/>
                                    <img src={contributionsLogo1}/>
                                    <img src={contributionsLogo2}/>
                                    <img src="https://images.opencollective.com/jsiegel/c378bf0/avatar.png"/>
                                    <span>+ 4015</span>                       
                                </div>
                                <p>3,901 individuals and 110 organizations have contributed</p>
                            </div>  
                        </div>

                        <div className="contributions_El">
                            <div className = "contributions_El_head">
                                <a>RECURRING CONTRIBUTION</a>
                            </div>
                            <div className = "contributions_El_body">
                                <p>Single Host Plan</p>
                                <span>Register to this plan to host a single collective.</span>
                                <span>Read more</span>
                                <div className="contributions_El_value">
                                    <span>$10</span>
                                    <span>USD</span>
                                    <span>/month</span>
                                </div>
                            </div>
                            <button className="contributions_btn">
                                Contribute
                            </button>
                            <div className="contributions_foot">
                                <div className="contributions_img">
                                    <img src="https://images.opencollective.com/gcvp/75ecf40/logo.png"/>
                                    <img src={contributionsLogo1}/>
                                    <img src={contributionsLogo2}/>
                                    <img src="https://images.opencollective.com/jsiegel/c378bf0/avatar.png"/>
                                    <span>+ 13</span>                       
                                </div>
                                <p>8 individuals and 9 organizations have contributed</p>
                            </div>  
                        </div>

                        <div className="contributions_El">
                            <div className = "contributions_El_head">
                                <a>RECURRING CONTRIBUTION</a>
                            </div>
                            <div className = "contributions_El_body">
                                <p>Small Host Plan</p>
                                <span>Register to this plan to host up to 5 collectives.</span>
                                <span>Read more</span>
                                <div className="contributions_El_value">
                                    <span>$25</span>
                                    <span>USD</span>
                                    <span>/month</span>
                                </div>
                            </div>
                            <button className="contributions_btn">
                                Contribute
                            </button>
                            <div className="contributions_foot">
                                <div className="contributions_img">
                                    <img src="https://images.opencollective.com/gcvp/75ecf40/logo.png"/>
                                    <img src={contributionsLogo1}/>
                                    <img src={contributionsLogo2}/>
                                    <img src="https://images.opencollective.com/jsiegel/c378bf0/avatar.png"/>
                                    <span>+ 6</span>                       
                                </div>
                                <p>1 individual and 9 organizations have contributed</p>
                            </div>  
                        </div>

                        <div className="contributions_El">
                            <div className = "contributions_El_head">
                                <a>RECURRING CONTRIBUTION</a>
                            </div>
                            <div className = "contributions_El_body">
                                <p>Medium Host Plan</p>
                                <span>Register to this plan to host up to 10 Collectives</span>
                                <span>Read more</span>
                                <div className="contributions_El_value">
                                    <span>$50</span>
                                    <span>USD</span>
                                    <span>/month</span>
                                </div>
                            </div>
                            <button className="contributions_btn">
                                Contribute
                            </button>
                            <div className="contributions_foot">
                                <div className="contributions_img">
                                    <img src="https://images.opencollective.com/gcvp/75ecf40/logo.png"/>
                                    <img src={contributionsLogo1}/>
                                    <img src={contributionsLogo2}/>
                                    <img src="https://images.opencollective.com/jsiegel/c378bf0/avatar.png"/>
                                    <span></span>                       
                                </div>
                                <p>1 individual has contributed</p>
                            </div>  
                        </div>
                    </div>

                    <h3>Events</h3>
                        <div className="contributions_Elements">
                            <div className="contributionsEvent_Elements">
                                <div className="contributionsEvent_El">
                                    <div className = "contributionsEvent_El_head">
                                        <a>PAST EVENT</a>
                                    </div>
                                <div className = "contributionsEvent_El_body">
                                    <p>2020/Q1 Team Retreat</p>
                                    <div className="contributionsEvent_El_date">
                                        <img src={contributionsDate}/>
                                        <span>Jan 27 → Feb 1, 2020</span><br />
                                    </div>
                                    <div className="contributionsEvent_El_date">
                                        <img src={contributionsTime}/>
                                        <span>01:00 AM GMT+9</span>
                                    </div>
                                    <p>An event to organize our first 2020 team retreat</p>
                                </div>
                            
                                <button className="contributionsEvent_btn">
                                    View Event
                                </button>
                                <div className="contributionsEvent_foot">
                                    <div className="contributionsEvent_img">
                                        <img src={contributionsLogo1}/>                   
                                    </div>
                                    <p>1 organization has contributed</p>
                                </div>  
                            </div>


                            <div className="contributionsEvent_Elements">
                                <div className="contributionsEvent_El">
                                    <div className = "contributionsEvent_El_head">
                                        <a>PAST EVENT</a>
                                    </div>
                                    <div className = "contributionsEvent_El_body">
                                        <p>Madrid Retreat</p>
                                        <div className="contributionsEvent_El_date">
                                            <img src={contributionsDate}/>
                                            <span>Sep 9 → Sep 13, 2019</span><br />
                                        </div>
                                        <div className="contributionsEvent_El_date">
                                            <img src={contributionsTime}/>
                                            <span>04:00 PM GMT+9</span>
                                        </div>
                                        <p>Team retreat in Madrid September 2019</p>
                                    </div>
                            
                                    <button className="contributionsEvent_btn">
                                        View Event
                                    </button>
                                    <div className="contributionsEvent_foot">
                                        <div className="contributionsEvent_img">
                                            <img src={contributionsLogo1}/>                   
                                        </div>
                                        <p>1 organization has contributed</p>
                                    </div>  
                                </div>
                            </div>


                            <div className="contributionsEvent_Elements">
                                <div className="contributionsEvent_El">
                                    <div className = "contributionsEvent_El_head">
                                        <a>PAST EVENT</a>
                                    </div>
                                    <div className = "contributionsEvent_El_body">
                                        <p>Open Collective March Meetup</p>
                                        <div className="contributionsEvent_El_date">
                                            <img src={contributionsDate}/>
                                            <span>Mar 8 → Mar 8, 2017</span><br />
                                        </div>
                                        <div className="contributionsEvent_El_date">
                                            <img src={contributionsTime}/>
                                            <span>09:00 AM GMT+9</span>
                                        </div>
                                        <p></p>
                                    </div>
                            
                                    <button className="contributionsEvent_btn">
                                        View Event
                                    </button>
                                    <div className="contributionsEvent_foot">
                                        <div className="contributionsEvent_img">
                                            <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                            <img src="https://images.opencollective.com/aseem/262cc49/avatar.png"/> 
                                            <img src="https://images.opencollective.com/piamancini1/6598cac/avatar.png"/> 
                                            <img src="https://images.opencollective.com/vickipeng/18dfeaf/avatar.png"/>                   
                                        </div>
                                        <p>1 organization has contributed</p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
        )
    }
}


export default Contributors