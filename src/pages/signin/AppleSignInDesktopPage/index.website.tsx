import React from 'react';
import ThirdPartySignInPage from '@pages/signin/ThirdPartySignInPage';
import CONST from '@src/CONST';

function AppleSignInDesktopPage() {
    return (
        <ThirdPartySignInPage
            // @ts-expect-error TODO: Remove this once SignIn (https://github.com/Expensify/App/issues/25224) is migrated to TypeScript.
            signInProvider={CONST.SIGN_IN_METHOD.APPLE}
        />
    );
}

export default AppleSignInDesktopPage;