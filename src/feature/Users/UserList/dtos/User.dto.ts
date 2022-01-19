export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export interface UserFormatted extends User {
  createdAtFormatted: string;
}
