import bcrypt from 'bcryptjs'

export const encryptPassword = (password) => {
    return bcrypt.hashSync(password,10)
}