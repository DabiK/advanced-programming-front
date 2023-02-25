import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
export interface SSODefinition {
    name: string;
    imageUrl: string;
    provider: CognitoHostedUIIdentityProvider;
}

export const providers: SSODefinition[] = [
    {
        name: 'Google',
        imageUrl: '/images/provider/google.png',
        provider: CognitoHostedUIIdentityProvider.Google,
    },
    {
        name: 'Facebook',
        imageUrl: '/images/provider/facebook.png',
        provider: CognitoHostedUIIdentityProvider.Facebook,
    },
];
