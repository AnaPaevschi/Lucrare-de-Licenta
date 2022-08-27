import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Anna',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ana',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
};
export default data;
