import Page from './page';

class HomePage extends Page {
    /**
     * define elements
     */
    get startACampaign () { return $('~Start a campaign'); }

    get menu () { return $('//android.view.View[@content-desc="dev"]/android.view.View'); }

    /**
     * overwrite specific options to adapt into page object
     */
     async tapStartACampaignButton(){
            await this.startACampaign.click();
        }

     async tapMenuButton(){
            await this.menu.click();
        }

    async open (): Promise<string> {
        return super.open('checkboxes');
    }

}

export default new HomePage();
