import HomePage from '../pageobjects/home.page.ts';

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

describe('Starting a campaign from the landing page,', () => {
    it('should be able to start a campaign', async () => {
        // Always make sure you are on the right tab
        await HomePage.tapStartACampaignButton();
        // Press the touch/faceID/Fingerprint button
        await sleep (15000);
   });
});
