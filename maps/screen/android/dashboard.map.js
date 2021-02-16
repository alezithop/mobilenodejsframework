module.exports = {
    self: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v4.view.ViewPager/android.widget.LinearLayout',
    buttons: {
        reports: {
            self: 'com.bizale.cobradorapp:id/ai_reports'
        },
        add_client: {
            self: 'com.bizale.cobradorapp:id/ai_customer_add'
        },
        more_options: {
            self: 'android=new UiSelector().className("android.widget.ImageView").descriptionContains("opciones")'
        },
        clear_search: {
            self: 'android=new UiSelector().resourceId("com.bizale.cobradorapp:id/ivClearSearch")'
        }
    },
    tabs: {
        clients: {
            self: 'android=new UiSelector().className("android.support.v7.app.ActionBar$Tab").description("Clientes")'
        },
        notes: {
            self: 'new UiSelector().className("android.support.v7.app.ActionBar$Tab").description("Notas")'
        }
    },
    textboxes: {
        search: {
            self: 'new UiSelector().resourceId("com.bizale.cobradorapp:id/inputSearch")'
        }
    }
};