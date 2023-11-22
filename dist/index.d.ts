import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type IProps = {
    captchaDomain: string;
    onReceiveToken: (captchaToken: string) => void;
    siteKey: string;
    action: string;
    style?: StyleProp<ViewStyle>;
};
export type IState = {};
declare class ReCaptchaV3 extends React.PureComponent<IProps, IState> {
    private _captchaRef;
    refreshToken: () => void;
    render(): JSX.Element;
}
export default ReCaptchaV3;
