export interface RegisterInterface {
  fullname: string;
  email: string;
  password: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}


export interface UserUpdate {
  fullname: string;
  password: string;
  about: string;
  profileImg;
}



