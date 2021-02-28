module.exports = {
    self: '',
    text: {
        hint: 'android=new UiSelector().className("android.widget.TextView").text("Hint:company")'
    },
    buttons: {
        login: {
            // self: 'android=new UiSelector().className("android.widget.Button").text("Login")'
            self: 'com.experitest.ExperiBank:id/loginButton'
        }
    },
    textboxes: {
        username: {
            self: 'com.experitest.ExperiBank:id/usernameTextField'
        },
        password: {
            self: 'com.experitest.ExperiBank:id/passwordTextField'
        }
    },
    images: {
        header: {
            // self: 'android=new UiSelector().className("android.widget.ImageView").instance(0)'
            self: '//android.widget.ImageView'
        }
    }
};
