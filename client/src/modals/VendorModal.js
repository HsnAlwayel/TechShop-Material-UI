import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import vendorsStore from "../stores/VendorStore";

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

const VendorModal = ({ isOpen, closeModal, oldVendor, vendorId }) => {
    const [vendor, setVendor] = useState(
        oldVendor ? oldVendor : {
            vendorId,
            name: "",
            image: "",
        }
    )

    const handleChange = (event) => setVendor({ ...vendor, [event.target.name]: event.target.value });

    const handleImage = (event) => setVendor({ ...vendor, image: event.target.files[0] });

    const handleSubmit = (event) => {
        event.preventDefault();
        vendorsStore[oldVendor ? "updateVendor" : "createVendor"](vendor);
        closeModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3>New Vendor</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-6">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} required value={vendor.name} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="file" name="image" className="form-control" onChange={handleImage} />
                </div>
                <CreateButtonStyled className="btn float-right">Save</CreateButtonStyled>
            </form>
        </Modal>

    )
};

export default VendorModal;