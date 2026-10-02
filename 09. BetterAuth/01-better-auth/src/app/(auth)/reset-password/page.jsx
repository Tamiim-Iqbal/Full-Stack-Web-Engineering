import React, { Suspense } from 'react';
import ResetPasswordForm from './Reset-Form';

const ResetPasswordPage = () => {
    return (
        <div>
            <h2>Reset Password</h2>
            <Suspense fallback="Loading...">
                <ResetPasswordForm></ResetPasswordForm>
            </Suspense>
        </div>
    );
};

export default ResetPasswordPage;