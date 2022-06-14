import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as renderer from '@react-pdf/renderer';

export default class Page extends Component {
    render() {
        return (
            <renderer.Page {...this.props}>
                {this.props.children}
            </renderer.Page>
        )
    }
}

Page.defaultProps = {};

Page.propTypes = {
    id: PropTypes.string,
    children: PropTypes.array,
    style: PropTypes.object,
    size: PropTypes.string,
    setProps: PropTypes.func
};

export const defaultProps = Page.defaultProps;
export const propTypes = Page.propTypes;