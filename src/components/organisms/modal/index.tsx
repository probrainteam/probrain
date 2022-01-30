import { XIcon } from 'components/atoms/icon';
import Text from 'components/atoms/text';
import { Link } from 'gatsby';
import React from 'react';
import './modal.scss';

interface ModalProps {
  onToggleClick: () => void;
}

const Modal = ({ onToggleClick }: ModalProps) => {
  return (
    <div className="modal">
      <XIcon onClick={onToggleClick} />
      <div className="mobile-nav-wrapper">
        <Link to="/">
          <Text className="mobile-nav">PROBRAIN</Text>
        </Link>
        <Link to="/junior">
          <Text className="mobile-nav">PROBRAIN JUNIOR</Text>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
