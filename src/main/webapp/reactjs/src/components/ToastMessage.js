import React from 'react';
import { Toast } from 'react-bootstrap';

class ToastMessage extends React.Component {
    render() {
        const toastCss = {
            position : 'fixed',
            top : '20px',
            right : '20px',

        }
        return (
            <div style={this.props.children.show?toastCss:null}>
                <Toast className={"border border-success bg-success text-white"} show={this.props.children.show}>
                    <Toast.Header className={"bg-success ext-white"} closeButton={false}>
                        <strong className="mr-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                       {this.props.children.message}
                    </Toast.Body>
                </Toast>
            </div>
        );
    }

}

export default ToastMessage