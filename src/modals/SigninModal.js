import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

// Stores
import authStore from "../stores/authStore";

//Components


//Styles
import { CreateButtonStyled } from "../styles"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const SigninModal = ({ isOpen, closeModal, oldUser }) => {
    const [user, setUser] = useState(
        {
            username: "",
            password: "",
        }
    )

    const handleChange = (event) => setUser({ ...user, [event.target.name]: event.target.value });


    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.signin(user);
        closeModal();
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>Signin</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            name="username"
                            value={user.username}
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name="password"
                            value={user.password}
                            type="password"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div >
                        <Link to="/signup" onClick={closeModal}><p>Create a new User</p></Link>
                    </div>
                    <CreateButtonStyled className="btn float-right" type="submit">
                        Signin
                    </CreateButtonStyled>
                </form>
            </Modal>
        </div>

    )
};

export default SigninModal;