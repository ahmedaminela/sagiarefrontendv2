 
export class Token {
    constructor(
      public username: string,
      public jwtToken: string,
      public roles: string[]
    ) {}
  } 