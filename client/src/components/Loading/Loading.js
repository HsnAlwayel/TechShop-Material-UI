import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ bars }) => {
    return (
        <ReactLoading type={bars} color={{ color: "#blue" }} />
    )
};

export default Loading;;