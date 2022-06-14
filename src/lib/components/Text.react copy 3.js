import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { DashReactPdf as RealComponent } from '../LazyLoader';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import * as renderer from '@react-pdf/renderer';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

export default class Text extends Component {
    render() {
        return (
            <renderer.Text {...this.props}>
                {this.props.children}
            </renderer.Text>
        )
    }
}

Text.defaultProps = {};

Text.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    children: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export const defaultProps = Text.defaultProps;
export const propTypes = Text.propTypes;