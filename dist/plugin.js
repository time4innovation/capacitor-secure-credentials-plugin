var capacitorSecureCredentials = (function (exports, core) {
    'use strict';

    exports.SecurityErrorCode = void 0;
    (function (SecurityErrorCode) {
        SecurityErrorCode["FailedToAccess"] = "failed to access";
        SecurityErrorCode["NoData"] = "no data";
        SecurityErrorCode["Unknown"] = "unknown";
        SecurityErrorCode["Unavailable"] = "unavailable";
        SecurityErrorCode["Params"] = "params";
    })(exports.SecurityErrorCode || (exports.SecurityErrorCode = {}));
    exports.SecurityLevel = void 0;
    (function (SecurityLevel) {
        /**
         * The credential will be stored encrypted, but it can be accessed by the application while the device is locked.
         */
        SecurityLevel[SecurityLevel["L1_Encrypted"] = 1] = "L1_Encrypted";
        /**
         * The credential will be stored encrypted, and it can only be accessed by the application when the
         * device is unlocked.
         */
        SecurityLevel[SecurityLevel["L2_DeviceUnlocked"] = 2] = "L2_DeviceUnlocked";
        /**
         * The credential will be stored encrypted, and it can only be accessed by the application after the OS
         * confirms the user is present by means of a challenge. The OS may remember that the user is
         * present for a configured period of time after a device PIN challenge.
         */
        SecurityLevel[SecurityLevel["L3_UserPresence"] = 3] = "L3_UserPresence";
    })(exports.SecurityLevel || (exports.SecurityLevel = {}));

    const SecureCredentials = core.registerPlugin('SecureCredentials', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SecureCredentialsWeb()),
    });

    class SecureCredentialsWeb extends core.WebPlugin {
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

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SecureCredentialsWeb: SecureCredentialsWeb
    });

    exports.SecureCredentials = SecureCredentials;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
