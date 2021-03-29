import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import productsStore from "../stores/ProductStore";

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

const ProductModal = ({ isOpen, closeModal, oldProduct, vendor }) => {
    const [product, setProduct] = useState(
        oldProduct ? oldProduct : {
            name: "",
            price: 0,
            description: "",
            image: "",
        }
    )

    const handleChange = (event) => setProduct({ ...product, [event.target.name]: event.target.value });

    const handleImage = (event) => setProduct({ ...product, image: event.target.files[0] });

    const handleSubmit = (event) => {
        event.preventDefault();
        productsStore[oldProduct ? "updateProduct" : "createProduct"](product, vendor);
        closeModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3>New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-6">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} value={product.name} />
                    </div>
                    <div className="col-6">
                        <label>Price</label>
                        <input type="number" min="1" name="price" className="form-control" onChange={handleChange} value={product.price} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="desc" className="form-control" onChange={handleChange} value={product.desc} />
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

export default ProductModal;