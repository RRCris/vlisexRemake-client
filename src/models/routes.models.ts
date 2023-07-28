export enum Roles {
  user = 'user',
  admin = 'admin',
  marketing = 'marketing',
  warehouse = 'warehouse'
}

export interface modelRoute {
  name: string
  path: string
  meta?: { auth: Roles[] }
}
