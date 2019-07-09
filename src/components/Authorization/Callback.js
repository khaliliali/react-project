import React, { Component } from 'react';

class Callback extends Component {
    componentDidMount = () => {
        // handle authentication if i expected values are in the urls
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
        } else {
            throw new Error('Invalid Callback url.');
        }
    };

    render() {
        return (
            <div>loading...</div>
            // <div className="container center">
            //     <div className=" preloader-wrapper active">
            //         <div className="spinner-layer spinner-red">
            //             <div className="circle-clipper left">
            //                 <div className="circle" />
            //             </div>
            //             <div className="gap-patch">
            //                 <div className="circle" />
            //             </div>
            //             <div className="circle-clipper right">
            //                 <div className="circle" />
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Callback;
