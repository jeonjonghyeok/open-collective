import React,{Component} from 'react';
import openCollecticon from "../../assets/Opencolleclog/opencollective-icon.svg"
import openCollectype from "../../assets/Opencolleclog/logotype.svg"
import glass from "../../assets/OpencollecOther/MagnifyingGlass.png"
import mainlogo from "../../assets/Opencolleclog/mainlogo.png"
import twiter from "../../assets/Opencolleclog/twiterSS.png"
import web from "../../assets/Opencolleclog/webSS.png"
import Contribute from "../../assets/OpencollecNavi/CollectiveSectionHeaderIconContribute.png"
import ContributeBudget from "../../assets/OpencollecNavi/CollectiveSectionHeaderIconBudget.png"
import ContributeMark from "../../assets/Opencolleclog/Contribute_mark.png"
// import contributionsLogo1 from "../../assets/Opencolleclog/logo (1).png"  
// import contributionsLogo2 from "../../assets/Opencolleclog/logo (3).png" 
// import contributionsDate from "../../assets/Opencolleclog/Dateimg.png"
// import contributionsTime from "../../assets/Opencolleclog/Timeclock.png" 
import footButton from "../../assets/Opencolleclog/footbuttonlogo.png"
import footlogo from "../../assets/Opencolleclog/opencollectivelogo-footer-n.svg"
import blogbtn from "../../assets/OpencollecOther/Blogbtn.png"
import githubbtn from "../../assets/OpencollecOther/githubbtn.png"
import maiilbtn from "../../assets/OpencollecOther/mailbtn.png"
import slackbtn from "../../assets/OpencollecOther/slackbtn.png"
import twiterbtn from "../../assets/OpencollecOther/twiterbtn.png"
import translate from "../../assets/OpencollecOther/translate.png"
import ContributorsCp from "../../components/Opencollect/CONTRIBUTORS/Contributors"
import Topfinance from "../../components/Opencollect/TOPFINANCE/Topfinance"
import Conversation from "../../components/Opencollect/CONVERSATIONS/conversations"
import Budgets from "../../components/Opencollect/BUDGET/Budget"

import "./Opencollective.css"
class Opencollective extends Component{
    render(){
        return(
            <div className="Opencollect">
                <div className="bacelog">
                    <div className="bacelogBG"></div>

                    <div className="bacelogEl">
                        <img id="mainlogo" src={mainlogo} width="128px" height="128px"/>
                        <h1>open Collective</h1>
                        <div className="collect">
                            <span id="collect_first">COLLECTIVE</span>
                            <img src={twiter} width="36px" height="36px"/>
                            <img src={web} width="36px" height="36px"/>
                            <a>
                                <span>Fiscal Host:</span>
                                <span>OpenCollective Inc</span>
                            </a>
                            <a>
                                <span>Part of:</span>
                                <span>OpenCollective Inc</span>
                            </a>
                        </div>
                        <h2>We are building tools in open source to organize the Internet generation</h2>
                    </div>
                    
                </div>

                <div className="baceNav">
                    <div className="baceNavbt">
                        <div className="baceNavEl">
                            <a>CONTRIBUTE</a>
                            <a>CONVERSATIONS</a>
                            <a>BUDGET</a>
                            <a>CONTRIBUTORS</a>
                            <a>RECURRING CONTRIVUTIONS</a>
                            <a>ABOUT</a>
                        </div>
                        <div className="baceNavbt_bts"> 
                        <button>Contract</button>
                        <button>Submit Expense</button>
                        </div>
                    </div>
                </div>
                <div className="container_Contribute">
                    <div className="first_Contribute">
                        <img src={Contribute} width="48" height="48"/>
                        <h2>Contribute</h2>
                        <img src={ContributeMark} width="18px" height="18px"/>
                        <hr />
                    </div>
                    <a>Become a financial contributor.</a>
                </div>

                <ContributorsCp />
                
                <button className="Contribute_btn">
                    View all the ways to contribute
                </button>

                <Topfinance/>

               
               <Conversation/>


                <div className="Budget">
                    <div className="Budget_head">
                        <img src={ContributeBudget} width="48px" height="48px"/>
                        <h2>Budget</h2>
                        <img src={ContributeMark} width="18px" height="18px"/>
                        <hr />
                    </div>
                    
                    <p>Transparent and open finances</p>

                    <Budgets/>
                </div>

                <div className="openCollective">
                    <h2>Open Collective is all of us</h2>
                    <div className="openCollective_sub">
                        <h3>Our contributors</h3>
                        <span>4026</span>
                    </div>

                    <p>
                        Everyone who has supported Open Collective. 
                        Individuals and organizations that believe 
                        in –and take ownership of– our purpose.
                    </p>

                    <div className="openCollective_btns">
                        <button>All contributors</button>
                        <button>Team</button>
                        <button>Financial contributors</button>
                    </div>

                    <div className="openCollectiveBox">
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        <div className="openCollectiveBox_El">
                            <div className="imageBox">
                                <img src="https://images.opencollective.com/xdamman/15645ac/avatar.png"/>
                                <hr />  
                            </div>
                            <p>Xavier Damman</p>
                            <p>admin</p>
                            <div className="imaeBox_contant">
                            <p>Total contributions</p>
                            <p>$2,010 USD</p>
                            <p>Investors</p>   
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="Recurring">
                    <h2>Recurring Contributions</h2>
                    <div className="Recurring_Btns">
                        <button>Active</button>
                        <button>Monthly</button>
                        <button>Yearly</button>
                        <button>Cancelled</button>
                    </div>
                    <div className="Recurring_Container">
                        
                        <div className="Recurring_ContainerEl">
                            <div className="RecurringlogBG">
                            </div>
                            <img src={footButton}/>
                            <p>Open Collective Docu...</p>
                            <p>ACTIVE CONTRIBUTION</p>
                            <div className="RecurringContent">
                                <p>Amount contributed</p>
                                <p>$200.00 USD / month</p>
                            </div>
                            <div className="RecurringContent">
                                <p>Contributed to date</p>
                                <p>$2,800.00 <span>USD</span></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="About">
                    <h2>About</h2>
                    <p>
                        We are building OpenCollective. 
                        Our goal is to enable people to create and 
                        fund associations as easily as creating a Facebook group.
                    </p>
                </div>
                <div className="foot">
                    <div className="foothead">
                        <div className="foothead_contents">
                            <img src={footlogo}/>
                            <p>Make your community sustainable.</p>
                        </div>
                        <div className="foothead_urlLogo">
                            <img src={blogbtn}/>
                            <img src={twiterbtn}/>
                            <img src={githubbtn}/>
                            <img src={slackbtn}/>
                            <img src={maiilbtn}/>
                        </div>
                    </div>
                    <div className="footNavilist">
                        <div className="footNavis">
                            <p>PLATFORM</p>
                            <a>Explainer video</a>
                            <a>How it works</a>
                            <a>Use Cases</a>
                            <a>Sign up</a>
                            <a>Login</a>
                        </div>
                        <div className="footNavis">
                            <p>JOIN</p>
                            <a>Create a Collective</a>
                            <a>Discover</a>
                            <a>Find a fiscal host</a>
                            <a>Become a sponsor</a>
                        </div>
                        <div className="footNavis">
                            <p>COMMUNITY</p>
                            <a>Open Source</a>
                            <a>Slack</a>
                            <a>Docs & Help</a>
                            <a>Support</a>
                        </div>
                        <div className="footNavis">
                            <p>COMPANY</p>
                            <a>About</a>
                            <a>Hiring</a>
                            <a>Terms of service</a>
                            <a>Privacy Policy</a>
                        </div>
                    </div>
                    <div className="transactions">
                        <img src={translate}/>
                        <span>CHANGE LANGUAGE</span>
                        <img src={ContributeMark} width="18px" height="18px"/>
                    </div>
                    <select className="footselect">
                        <option>🇺🇸 English-English(100%)</option>
                    </select>
                </div>
            </div>
        )
    }
}
export default Opencollective