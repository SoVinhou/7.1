import React, { useState } from 'react';
import './JobPage.css'
import './index.css'

function FreelanceOpt() {

    return (
        <div className="freelanceBody">
            <div>
                <div className="DescribeYourJob">
                    <h2>Describe Your Job</h2>
                </div>
                <div className="JobDescription">
                    <form>
                        <label  style={{ fontSize: "25px" , fontWeight: "bold", marginBottom: "10px" }}>
                            Title/Position
                            <input type="text" name="title" style={{ marginTop: "15px", padding: "12px", boxShadow: "0 0 2px"}} />
                        </label>
                        <br />
                        <label  style={{ fontSize: "25px" , fontWeight: "bold", marginBottom: "10px" }}>
                            Job Description
                            <input type="text" name="title" style={{ marginTop: "15px", padding: "60px", boxShadow: "0 0 2px"}} />
                        </label>
                        <br />
                        <label  style={{ fontSize: "25px" , fontWeight: "bold", marginBottom: "10px" }}>
                            Skills
                            <input type="text" name="title" style={{ marginTop: "15px", padding: "12px", boxShadow: "0 0 2px"}} placeholder='Please Add Relevant Skills ... ' />
                        </label>
                        <br />
                    </form>
                    <h4 style= {{fontSize: "25px", fontWeight: "bold", textAlign: "center", fontStyle: "italic"}}> Developers will find your job based on the skills you added here. </h4>
                </div>

                <div className="ProjectConditionsBanner">
                    <h2>Project Condition</h2>
                </div>

                <div className="ProjectConditions">
                    <form>
                        <label  style={{ fontSize: "25px" , fontWeight: "bold", marginBottom: "10px" }}>
                            Project Length
                            <input type="text" name="title" style={{ marginTop: "15px", padding: "12px", boxShadow: "0 0 2px"}} />
                        </label>
                        <br />
                        <label  style={{ fontSize: "25px" , fontWeight: "bold", marginBottom: "-10px" }}>
                            Payment
                        </label>
                        <label  style={{ fontSize: "20px" , fontWeight: "bold", marginBottom: "10px", fontStyle: "italic" }}>
                            Min Payment:
                            <input type="text" name="min" style={{ marginTop: "15px", padding: "10px", boxShadow: "0 0 2px"}} />
                            <br />
                            Max Payment:
                            <input type="text" name="max" style={{ marginTop: "15px", padding: "10px", boxShadow: "0 0 2px"}} />
                        </label>
                        <br />
                        <label  style={{ fontSize: "25px" , fontWeight: "bold", marginBottom: "10px" }}>
                            Working Hours
                            <input type="text" name="title" style={{ marginTop: "15px", padding: "12px", boxShadow: "0 0 2px"}}/>
                        </label>
                        <br />
                    </form>
                </div>

                <div className="ExperienceBanner">
                    <h2>Experience</h2>
                </div>

                <div className="Experience">
                    <h4 style= {{fontSize: "25px", fontWeight: "bold", textAlign: "center", fontStyle: "italic"}}> This section is designed based on the type of the job. 
                        <br />
                        It could be developed by conditional rendering.
                    </h4>
                    <label style={{ marginLeft:"690px", fontSize: "25px", fontWeight: "bold", marginTop: "7px", display: "inline-block"}}>
                        Experienced in
                        <input type="text" name="title" style={{ marginTop: "15px", padding: "12px", boxShadow: "0 0 2px", marginLeft: "20px", borderRadius:"5px", display: "inline-block", alignItems: "center"}} />
                    </label>
                    <label style={{ fontSize: "25px", fontWeight: "bold", marginTop: "7px", display: "inline-block", marginLeft: "60px"}}>
                        For at least
                        <input type="text" name="title" style={{ marginTop: "15px", padding: "12px", boxShadow: "0 0 2px", marginLeft: "20px", borderRadius:"5px", display: "inline-block", alignItems: "center" }} />
                    </label>
                </div>

                <button style={{fontSize:"25px"}} type="submit">POST</button>
               
            </div>

        </div>
    );
}


export default FreelanceOpt;