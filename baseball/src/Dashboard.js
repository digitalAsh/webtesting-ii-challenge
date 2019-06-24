import React from 'react';

function Dashboard(props) {

        return (
            <div>
               <button onClick={props.strikeSubmit}>Strike</button>     
               <button onClick={props.ballSubmit}>Ball</button>    
               <button onClick={props.foulSubmit}>Foul</button>    
               <button onClick={props.hitSubmit}>Hit</button>    
            </div>    
        )
    }    

export default Dashboard;