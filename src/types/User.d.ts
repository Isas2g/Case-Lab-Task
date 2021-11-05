interface User {
  id: number
  login: string
  fullName: string
  data: UserData
}

interface UserData {
  firstName: string
  lastName: string
  secondName: string
  avatarUrl: string
  department: string
  company: string
}
