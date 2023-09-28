//Khi nào cân layout nào thì nó sẽ tự gọi tới
import { defineAsyncComponent } from "vue";
export function registerGlobalComponents(app) {
    app.component('auth-layout', defineAsyncComponent(() => import('@/layouts/auth'))
    );
    app.component('default-layout', defineAsyncComponent(() => import('@/layouts/default'))
    );
}
