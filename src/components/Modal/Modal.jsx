import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeModal);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal);
    }
    
    closeModal = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    
    closeByClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div onClick={this.closeByClick}>
                <div>{this.props.children}</div>
            </div>,
            modalRoot
        )
    }
}

export {Modal}