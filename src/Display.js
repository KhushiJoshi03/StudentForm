import axios from "axios";
import React from "react";
import Menu from "./Menu";
class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mydata: [],
            isload: false

        }
    }
    componentDidMount() {
        axios.get("https://akashsir.in/myapi/crud/student-display-api.php")
            .then((res) => {
                console.log(res.data.student_list)
                this.setState({
                    mydata: res.data.student_list,
                    isload: true
                })
            })
    }
    render() {
        var { mydata, isload } = this.state
        if (!isload) {
            return <h1>Loading...</h1>
        }
        return (
            <>
            <Menu/>
                <div style={{ textAlign: "center" }}>
                    <h1 className="display-4">Student Data</h1>
                    <table className="table" border={1}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile No.</th>
                            </tr>
                        </thead>
                        {mydata.map((value) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{value.st_name}</th>
                                            <td>{value.st_gender}</td>
                                            <td>{value.st_email}</td>
                                            <td>@{value.st_mobileno}</td>
                                        </tr>
                                    </tbody>

                                </>
                            )
                        })}
                    </table>
                </div>
            </>
        )
    }
}
export default Display;