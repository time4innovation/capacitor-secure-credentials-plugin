export var SecurityErrorCode;
(function (SecurityErrorCode) {
    SecurityErrorCode["FailedToAccess"] = "failed to access";
    SecurityErrorCode["NoData"] = "no data";
    SecurityErrorCode["Unknown"] = "unknown";
    SecurityErrorCode["Unavailable"] = "unavailable";
    SecurityErrorCode["Params"] = "params";
})(SecurityErrorCode || (SecurityErrorCode = {}));
export var SecurityLevel;
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
})(SecurityLevel || (SecurityLevel = {}));
//# sourceMappingURL=definitions.js.map