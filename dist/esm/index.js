import { registerPlugin } from '@capacitor/core';
const SecureCredentials = registerPlugin('SecureCredentials', {
    web: () => import('./web').then(m => new m.SecureCredentialsWeb()),
});
export * from './definitions';
export { SecureCredentials };
//# sourceMappingURL=index.js.map