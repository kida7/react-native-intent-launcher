declare module 'react-native-intent-launcher' {
    type ActivityParams = {
        action?: string;
        type?: string;
        category?: string;
        extra?: { [key: string]: any };
        data?: string;
        flags?: string;
        packageName?: string;
        className?: string;
    };
    type AcitvityResult = {
        resultCode: number
        data: string,
        extra: {
            action: 'tracking' | 'continue'
        }
    };
    namespace IntentLauncher {
        export function startActivity(params: ActivityParams): Promise<AcitvityResult>
        export function startAppByPackageName(packageName: string): Promise<boolean>
        export function isAppInstalled(packageName: string): Promise<boolean>//closeActivityWithResult
        export function closeActivityWithResult(data: string): Promise<boolean>//closeActivityWithResult
    }
    export = IntentLauncher
}