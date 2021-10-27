interface User {
  id: integer;
  login: string;
  fullName: string;
  data: UserData;
}

interface UserData {
  firstName: string;
  lastName: string;
  secondName: string;
  avatarUrl: string;
  departament: string;
  company: string;
}