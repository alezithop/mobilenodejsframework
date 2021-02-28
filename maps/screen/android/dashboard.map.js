module.exports = {
    self: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v4.view.ViewPager/android.widget.LinearLayout',
    text: {
        your_balance_header: {
            self: 'android=new UiSelector().className("android.view.View").descriptionContains("Your balance is")'
        }
    },
    buttons: {
        make_payment: {
            self: 'com.experitest.ExperiBank:id/makePaymentButton'
        },
        mortgage_request: {
            self: 'com.experitest.ExperiBank:id/mortageRequestButton'
        },
        expense_report: {
            self: 'com.experitest.ExperiBank:id/expenseReportButton'
        },
        logout: {
            self: 'com.experitest.ExperiBank:id/logoutButton'
        }
    },
    images: {
        header: {
            // self: 'android=new UiSelector().className("android.widget.ImageView").instance(0)'
            self: '//android.widget.ImageView'
        }
    }
};