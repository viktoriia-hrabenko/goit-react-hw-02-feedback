import { Component } from "react";
import PropTypes from 'prop-types';

export class Notification extends Component {
    render() {
        const { message } = this.props;
        return message && <p>{message}</p>;
    }
}

Notification.propTypes = {
    message: PropTypes.string,
}