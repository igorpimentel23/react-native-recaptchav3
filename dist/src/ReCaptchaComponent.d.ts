import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
type IProps = {
    captchaDomain: string;
    onReceiveToken: (captchaToken: string) => void;
    siteKey: string;
    action: string;
    style?: StyleProp<ViewStyle>;
};
declare class ReCaptchaComponent extends React.PureComponent<IProps> {
    private _webViewRef;
    refreshToken(): void;
    render(): JSX.Element;
}
export default ReCaptchaComponent;
