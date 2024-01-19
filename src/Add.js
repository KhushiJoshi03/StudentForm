import React from "react";
import axios from "axios";
import Menu from "./Menu";
class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txtnm:"",
            gender:"",
            txtemail:"",
            txtmob:"",
            txtpwd:""
        }
    }
    txtChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    btnSub(e) 
    {
        e.preventDefault()
        var myformdata = new FormData();
            myformdata.append("st_name",this.state.txtnm);
            myformdata.append("st_gender",this.state.gender);
            myformdata.append("st_email",this.state.txtemail);
            myformdata.append("st_mobileno",this.state.txtmob);
            myformdata.append("st_password",this.state.txtpwd);
        axios.post("https://akashsir.in/myapi/crud/student-add-api.php",myformdata)
        .then((res)=>{
            console.log(res.data.student_list)
            if(res.data.flag=="1")
            {
                alert("Record Added Successfully")
            }
            else{
                alert(res.data.msg)
            }
        })
    }


    render() {
        return (
            <>
            <Menu/>
                <div>
                    <h2 className="display-4" style={{ textAlign: "center",paddingTop:"1%" }}>Add Student Details</h2> 
                    <form>
                        <div className="col">
                            <input type="text" name="txtnm" className="form-control" placeholder="Name" onChange={this.txtChange.bind(this)}/>
                        </div><br />
                        <div className="input-group">
                            <div className="input-group-text">
                                Male <input type="radio" name="gender" value="male" onChange={this.txtChange.bind(this)}/>
                            </div>
                            <div className="input-group-text">
                                Female <input type="radio" name="gender" value="female" onChange={this.txtChange.bind(this)}/>
                            </div>
                        </div> <br />
                        <div className="col">
                            <input type="text" name="txtemail" className="form-control" placeholder="Email" onChange={this.txtChange.bind(this)}/>
                        </div> <br />
                        <div className="col">
                            <input type="text" name="txtmob" className="form-control" placeholder="Mobile Number" onChange={this.txtChange.bind(this)}/>
                        </div> <br />
                        <div className="col">
                            <input type="text" name="txtpwd" className="form-control" placeholder="Password" onChange={this.txtChange.bind(this)}/>
                        </div> <br/>
                        <input className="btn btn-primary" type="submit" value="Save" onClick={this.btnSub.bind(this)}></input>
                    </form>
                </div>
            </>
        )
    }
}
export default Add;