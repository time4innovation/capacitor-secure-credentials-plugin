import { WebPlugin } from '@capacitor/core';
import { Credential, Failure, SecureCredentialsError, SecureCredentialsPlugin, Success, CredentialOptions, BiometricSensors, SecurityStrategy } from './definitions';
export declare class SecureCredentialsWeb extends WebPlugin implements SecureCredentialsPlugin {
    getCredential(options: {
        service: string;
        username: string;
    }): Promise<Success<Credential> | Failure<SecureCredentialsError>>;
    getUsernames(options: {
        service: string;
    }): Promise<Success<string[]> | Failure<SecureCredentialsError>>;
    removeCredential(options: {
        service: string;
        username: string;
    }): Promise<Success<boolean> | Failure<SecureCredentialsError>>;
    removeCredentials(options: {
        service: string;
    }): Promise<Success<boolean> | Failure<SecureCredentialsError>>;
    setCredential(options: {
        service: string;
        credential: Credential;
        options?: CredentialOptions;
    }): Promise<Success<boolean> | Failure<SecureCredentialsError>>;
    availableSecurityStrategies(): Promise<Success<SecurityStrategy[]> | Failure<SecureCredentialsError>>;
    supportedBiometricSensors(): Promise<Success<BiometricSensors>>;
}
