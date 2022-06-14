import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as renderer from '@react-pdf/renderer';

export default class View extends Component {
    render() {
        return (
            <renderer.View {...this.props}>
                {this.props.children}
            </renderer.View>
        )
    }
}

View.defaultProps = {};

View.propTypes = {
    id: PropTypes.string,
    children: PropTypes.array,
    style: PropTypes.object,
    setProps: PropTypes.func
};

export const defaultProps = View.defaultProps;
export const propTypes = View.propTypes;