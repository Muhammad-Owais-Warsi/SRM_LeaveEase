import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../Styles/Root.css"
import "../Styles/FaApplication.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';

const FaApp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const dataParam = queryParams.get('data');

    // Assuming data is a JSON string, parse it to get the actual object
    const responseData = dataParam ? JSON.parse(dataParam) : null;

    // Ensure that the necessary data is available
    if (!responseData || !Array.isArray(responseData.data.data)) {
        return (
            <div>
                <h1>No data available</h1>
            </div>
        );
    }



    // State to track the forms to be displayed
    const [forms, setForms] = useState(responseData.data.data || []);

    const handleViewClick = (person) => {


        // Open a new window
        const popupWindow = window.open('', 'StudentPopupWindow', 'width=600,height=400,scrollbars=yes,resizable=yes');

        // Render the StudentPopup component in the new window
        popupWindow.document.body.innerHTML = `
        <div class="popup">
            <h2>Leave Application Details</h2>
            <div class="name">
                <div class="name-head">Name</div>
                <div class="name-info">${person.name}</div>
            </div>
            <div class="register">
                <div class="register-head">Registration Number</div>
                <div class="register-info">${person.register}</div>
            </div>
            <div class="email">
                <div class="email-head">Email</div>
                <div class="email-info">${person.email}</div>
            </div>
            <div class="date">
                <div class="dateOut-head">Date Out</div>
                <div class="dateOut-info">${person.form.dateOut}</div>
                <div class="dateIn-head">Date In</div>
                <div class="dateIn-info">${person.form.dateIn}</div>
            </div>
            <div class="contact">
                <div class="personal-head">Personal Phone</div>
                <div class="personal-info">${person.form.personalPhone}</div>
                <div class="parent-head">Parent Phone</div>
                <div class="parent-info">${person.form.parentPhone}</div>
            </div>
            <button class="btn" onClick="window.close()">Close</button>
        </div>
    `;

        // Add styles to the popup
        popupWindow.document.head.innerHTML = `
        <style>
            *{
                font-family:"Baloo Bhai";
            }
            .popup {
                background-color: #fff;
                padding: 20px;
                border: 1px solid #ccc;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                max-width: 400px;
                margin: 20px auto;
            }
    
            .name, .register, .email, .date, .contact {
                margin-bottom: 15px;
            }
    
            .name-head, .register-head, .email-head, .dateOut-head, .dateIn-head, .personal-head, .parent-head {
                font-weight: bold;
                margin-bottom: 5px;
                color: #333;
            }
    
            .name-info, .register-info, .email-info, .dateOut-info, .dateIn-info, .personal-info, .parent-info {
                color: #555;
            }
    
            .btn {
                background-color:red;
                color: #fff;
                padding: 10px 15px;
                border: none;
                cursor: pointer;
            }

            

                        /* width */
            ::-webkit-scrollbar {
                width: 10px;
            }
            
            /* Track */
            ::-webkit-scrollbar-track {
                background: #b8aaaab6;
            }
            
            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: rgb(53, 135, 243) ;
            }
            
        </style>
    `;

    };



    const handleRemoveClick = async (index) => {
        const email = forms[index].email;
    
        const loadingNotification = toast.loading("Submitting...");
    
        try {
            const newData = await rejectForm(email);
    
            // Update the state with the new data
            setForms(newData.data.data);
    
            toast.dismiss(loadingNotification);
            toast.success("Form successfully rejected!", { icon: '✅' });
    
            // Navigate to the FaApplication page with the new data
            navigate(`/FaApplication?data=${encodeURIComponent(JSON.stringify(newData))}`);
        } catch (error) {
            console.error("Error rejecting form:", error);
            toast.dismiss(loadingNotification);
            toast.error("Submission failed. Please try again.");
        }
    };
    

    const rejectForm = async (email) => {
        try {
            const newData = await axios.post("http://localhost:4000/fa/reject", {
                email: email
            });
            setForms("");
            return newData;
        }catch(err) {
            console.error("Error:", err);
            throw err;
        }
        
        
    }

    return (
        <div className='applications'>
            {forms.map((person, index) => (
                <div key={index} className='application'>
                    <h1>{person.name}</h1>
                    <p>Register Number: {person.register}</p>
                    <p>Email: {person.email}</p>
                    <div className='card-btn'>
                        <div className='card-view-btn'>
                            <button className='view-btn' onClick={() => handleViewClick(person)} style={{ position: "relative", top: "-53px", left: "-67px" }}>View</button>

                        </div>
                        <div className='card-action-btn'>
                            <button className='approve-btn' style={{ position: "relative", left: "-62px", width: "71%" }}>Approve</button>
                            <button className='del-btn' onClick={() => handleRemoveClick(index)} style={{ position: "relative", left: "9px", width: "100px" }}>Reject</button>
                        </div>
                    </div>

                    <hr />
                </div>
            ))}


        </div>
    );
};

export default FaApp;
