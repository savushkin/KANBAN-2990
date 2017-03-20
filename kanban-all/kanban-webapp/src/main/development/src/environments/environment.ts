// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  host: 'http://localhost:8081/',
  context: '',
  links: '',
  boardPermission: {
    all: 'boardPermissions/',
    create: 'boardPermissions/',
    one: 'boardPermissions/',
    update: 'boardPermissions/',
    delete: 'boardPermissions/'
  },
  systemUser: {
    all: 'systemUsers/',
    create: 'systemUsers/',
    one: 'systemUsers/',
    update: 'systemUsers/',
    delete: 'systemUsers/'
  },
  board: {
    all: 'boards/',
    create: 'boards/addNew',
    one: 'boards/',
    update: 'boards/',
    delete: 'boards/'
  },
  task: {
    all: 'tasks/',
    create: 'tasks/addNew',
    one: 'tasks/info/',
    update: 'tasks/save/',
    delete: 'tasks/remove/',
    getAllByColumn: 'tasks/search/getAllTaskByBoardColumn'
  },
  systemPermission: {
    all: 'systemPermissions/',
    create: 'systemPermissions/',
    one: 'systemPermissions/',
    update: 'systemPermissions/',
    delete: 'systemPermissions/'
  },
  column: {
    all: 'boardColumns/',
    create: 'boardColumns/addNew',
    one: 'boardColumns/',
    update: 'boardColumns/',
    delete: 'boardColumns/',
    getAllByBoard: 'boardColumns/search/getAllBoardColumnForBoard'
  },
  kanbanUser: {
    all: 'kanbanUsers/',
    create: 'kanbanUsers/',
    one: 'kanbanUsers/',
    update: 'kanbanUsers/',
    delete: 'kanbanUsers/'
  }
};
