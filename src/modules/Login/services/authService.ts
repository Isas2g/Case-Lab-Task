export const AuthService = {
  loginTeacher: () => {
    localStorage.setItem('token', 'ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4')
    localStorage.setItem('role', 'teacher')
    return 'ks8w8wow40sw8sw0o4wwo0c40s4000wgo8gg4os4'
  },

  loginStudent: () => {
    localStorage.setItem('token', '00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k')
    localStorage.setItem('role', 'student')
    return '00k488okc8c804ocw8w80s4c0kg8g4ow04ssgk4k'
  },
}
