// @flow
import React from 'react'
import {ActivityIndicator, TouchableOpacity} from 'react-native'
import style from './style';
import Theme from "../../App.style";
import Text from "../Text";

export type ButtonProps = {
    key?: any,
    type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary',
    label: string,
    style: *,
    fontStyle?: *,
    loading?: boolean,
    disabled?: boolean,
    action: () => void,
};

const Button = (props: ButtonProps) => {

    const setBtStyle = () => {
        switch (props.type) {
            case 'primary':
                return style.primaryContainer;
            case 'secondary':
                return style.secondaryContainer;
            case 'tertiary':
                return style.tertiaryContainer;
            case 'quaternary':
                return style.quaternaryContainer;
            default:
                return style.primaryContainer;
        }
    }

    const setTextColor = () => {
        switch (props.type) {
            case 'primary':
                return Theme.base_color_10;
            case 'secondary':
                return Theme.base_color_10;
            case 'tertiary':
                return Theme.primary_color_2;
            case 'quaternary':
                return Theme.base_color_10;
        }
    }

    return (
        <TouchableOpacity
            style={[style.mainContainer, setBtStyle(), props.disabled === true ? style.disabled : null, props.style]}
            onPress={props.action} disabled={props.disabled}>
            {
                props.loading ? <ActivityIndicator color={setTextColor()}/>
                    :
                    <Text weight={'regular'} size={6}
                          style={[{color: setTextColor()}, props.fontStyle]}>
                        {props.label}
                    </Text>
            }
        </TouchableOpacity>
    )

}

Button.defaultProps = {
    type: 'primary',
    disabled: false,
    loading: false,
}


export default Button
