import { WebPlugin } from '@capacitor/core';
export class SecureCredentialsWeb extends WebPlugin {
    async getCredential(options) {
        return setTimeout(() => console.log('WEB -> getCredential', options), 1000);
    }
    async getUsernames(options) {
        return setTimeout(() => console.log('WEB -> getUsernames', options), 1000);
    }
    async removeCredential(options) {
        return setTimeout(() => console.log('WEB -> removeCredential', options), 1000);
    }
    async removeCredentials(options) {
        return setTimeout(() => console.log('WEB -> removeCredentials', options), 1000);
    }
    async setCredential(options) {
        return setTimeout(() => console.log('WEB -> setCredential', options), 1000);
    }
    async availableSecurityStrategies() {
        return setTimeout(() => console.log('WEB -> availableSecurityStrategies'), 1000);
    }
    async supportedBiometricSensors() {
        return setTimeout(() => console.log('WEB -> supportedBiometricSensors?'), 1000);
    }
}
//# sourceMappingURL=web.js.map