import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: any; // Ganti `any` dengan tipe user Anda jika Anda memiliki tipe/interface User
}
