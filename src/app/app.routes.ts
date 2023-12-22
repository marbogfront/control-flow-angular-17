import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/user-new-syntax/user-new-syntax.component')
            .then(c => c.UserNewSyntaxComponent)
    },
    {
        path: 'user-old-syntax',
        loadComponent: () => import('./components/user-old-syntax/user-old-syntax.component')
            .then(c => c.UserOldSyntaxComponent)
    }
];
