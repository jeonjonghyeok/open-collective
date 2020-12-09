import React, {Component} from 'react';

class Budget extends Component{
    render(){
        return(
        <div className="BudgetContainer">
            <div className="BudgetContainer_Box">
                <div className="BudgetContainer_BoxElement">
                    <div className="BudgetContainer_BoxEl">
                        <div className="BudgetContainer_contents">
                            <img src="https://images.opencollective.com/jane-powell/avatar.png"/>
                        
                            <div className="BudgetContainer_content">
                                <p>Financial contribution to Open Collective</p>
                                <p>from <a>Jane Powell</a> • 12/4/2020</p>
                            </div>
                        </div>

                        <div className="BudgetContainer_BoxSt">
                            <div className="BudgetContainer_BoxSt_el">
                                <span>+</span><span>$0.67</span><span>USD</span>
                            </div>
                            
                            <p>COMPLETED</p>
                            
                        </div>
                        
                    </div>
                    <button>ViewDetail</button>
                </div>
                <div className="BudgetContainer_BoxElement">
                    <div className="BudgetContainer_BoxEl">
                        <div className="BudgetContainer_contents">
                            <img src="https://images.opencollective.com/jane-powell/avatar.png"/>
                        
                            <div className="BudgetContainer_content">
                                <p>Financial contribution to Open Collective</p>
                                <p>from <a>Jane Powell</a> • 12/4/2020</p>
                            </div>
                        </div>

                        <div className="BudgetContainer_BoxSt">
                            <div className="BudgetContainer_BoxSt_el">
                                <span>+</span><span>$0.67</span><span>USD</span>
                            </div>
                            
                            <p>COMPLETED</p>
                            
                        </div>
                        
                    </div>
                    <button>ViewDetail</button>
                </div>
                <div className="BudgetContainer_BoxElement">
                    <div className="BudgetContainer_BoxEl">
                        <div className="BudgetContainer_contents">
                            <img src="https://images.opencollective.com/jane-powell/avatar.png"/>
                        
                            <div className="BudgetContainer_content">
                                <p>Financial contribution to Open Collective</p>
                                <p>from <a>Jane Powell</a> • 12/4/2020</p>
                            </div>
                        </div>

                        <div className="BudgetContainer_BoxSt">
                            <div className="BudgetContainer_BoxSt_el">
                                <span>+</span><span>$0.67</span><span>USD</span>
                            </div>
                            
                            <p>COMPLETED</p>
                            
                        </div>
                        
                    </div>
                    <button>ViewDetail</button>
                </div>
                
                
                <div className="BugetContainer_Bt">
                <button>View all transactions</button>
                <button>View all expenses</button>
                </div>
            </div>
            
            <div className="BudgetContainer_totalBox">
                <div className="BudgetContainer_totalBoxEl">
                    <p>TODAY’S BALANCE</p>
                    <p>$11,909.85 <span>USD</span></p>
                </div>

                <div className="BudgetContainer_totalBoxEl">
                    <p id="totalBoxEl_first">ESTIMATED ANNUAL BUDGET</p>
                    <p>~ $201,545.71 <span>USD</span> </p>
                </div>
            </div>
        </div>
        )
    }
}

export default Budget