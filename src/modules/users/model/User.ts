import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = uuidV4();
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  public turnAdmin(): User {
    this.updated_at = new Date();
    this.admin = true;
    return this;
  }
}

export { User };

/*
    if(userProps.created_at){
      this.created_at = userProps.created_at;
    } else {
      this.created_at = new Date();
    }
    if(userProps.updated_at){
      this.created_at = userProps.updated_at;
    }else {
      this.updated_at = new Date();
    }
*/
