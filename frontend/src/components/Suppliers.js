import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Suppliers = () => {
    
    const divStyle = {
        backgroundImage:
            'url("https://raw.githubusercontent.com/gar-git/images/main/21727022_6505894.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "50px",
    };
    // const [role, setRole] = useState("user");
    const [Company_name, setCompany_name] = useState("");
    const [Supplier_name, setSupplier_name] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Address, setAdress] = useState("");
    const [Admin_id, setAdmin_id] = useState("");
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    let token = localStorage.getItem("token")
    // token = JSON.parse(token)


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log("Company name", Company_name)
        // Retrieve the token from local storage or another secure storage mechanism
        // const token = localStorage.getItem("token");

        const data = {
            Company_name,
            Supplier_name,
            Email,
            Phone,
            Address,
            Admin_id,
            Username,
            password,
        };

        try {
            const response = await fetch("http://localhost:3002/addSupplier", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Include the token in the Authorization header
                },
                body: JSON.stringify(data), // Serialize the data to JSON
            });


            if (response.status === 200) {
                console.log("Supplier added successfully");
                // Redirect to another page or show a success message
                navigate("/success");
            } else {
                // Handle the error or show an error message to the user
                console.error("Error adding supplier");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };




    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={divStyle}>

            <div className="bg-white p-3 rounded w-75 border border-dark rounded p-4">

                <form onSubmit={handleSubmit}>

                    <h2 className="text-center mb-4">Register Supplier</h2>

                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label htmlFor="comname" className="form-label">
                                Enter Company Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Company Name"
                                className="form-control rounded-0"
                                value={Company_name}
                                onChange={(e) => setCompany_name(e.target.value)}
                            />
                        </div>


                        <div className="col-md-6 mb-3">
                            <label htmlFor="supname" className="form-label">
                                Supplier Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Supplier Name"
                                className="form-control rounded-0"
                                value={Supplier_name}
                                onChange={(e) => setSupplier_name(e.target.value)}

                            />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control rounded-0"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>


                        <div className="col-md-6 mb-3">
                            <label htmlFor="Phone" className="form-label">
                                Phone
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Phone number"
                                className="form-control rounded-0"
                                value={Phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                className="form-control rounded-0"
                                value={Address}
                                onChange={(e) => setAdress(e.target.value)}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="Admin_ID" className="form-label">
                                AdminID
                            </label>
                            <select className="form-control rounded-0" value={Admin_id}
                                onChange={(e) => setAdmin_id(e.target.value)}>
                                <option value="101">101</option>

                            </select>

                        </div>



                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter UserName"
                                className="form-control rounded-0"
                                value={Username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>



                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="form-control rounded-0"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-2">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Suppliers;
