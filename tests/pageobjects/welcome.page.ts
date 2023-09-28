import Page from './page.ts';

class WelcomePage extends Page {
    get email () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[1]'); }
    get password () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.EditText[2]');}
    get signInButton () { return $('//android.widget.Button[@content-desc="Sign in"]');}

    async signIn(email, password){
     await this.email.setValue(email);
     await driver.back();

     await this.password.click();
     await this.password.setValue(password);
     await driver.back();

     await this.signInButton.click();

    }


}
export default new WelcomePage();
