import WelcomePage from '../pageobjects/welcome.page.ts';

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

describe('Signing from the welcome page', () => {
    it('should be able to sign in into the app', async () => {
        await WelcomePage.signIn('user','pass');
        await sleep (15000);
   });
});
