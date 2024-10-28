# Folder Structure

```
- componentes:
- - AdminNav.vue
- - EmpresaNav.vue
- composables:
- - useAuthOperations.ts
- - useFirestoreOperations.ts
- layouts:
- - default.vue (Mostrara el login sin slot si el usuario no esta logeado)
- - logged.vue (Este es una referenca a los menus de navegacion dependiendo del rol de usuario)
- middleware:
- - auth.global.ts
- pages:
- - admin:
- - - dashboard.vue
- - - empresas.vue
- - - pasantes.vue
- - - reportes.vue
- - empresa:
- - - dashboard.vue
- - - pasantes.vue
- - - reportes.vue
- - index.vue
- app.vue
- error.vue
```