import { Request, Response } from 'express';
import data from '../../24-taller-04-datos.json'; 
import { UserModel } from './user.model';
// DECLARE CONTROLLER FUNCTIONS
export const getUsersByHobby: any = (req: Request, res: Response) => {
  const { hobby } = req.params; 
  const usersWithHobby = data.filter(user => user.hobbies.includes(hobby));

  if (usersWithHobby.length > 0) {
      res.json(usersWithHobby); 
  } else {
      res.status(404).json({ message: 'No hay usuarios con ese hobby' }); 
  }
}
export const userExists = (req: Request, res: Response) => {
  const { codigo } = req.params; 
  const user = data.find(user => parseInt(user.codigo) === parseInt(codigo)); 

  if (user) {
      res.json({ exists: true }); 
  } else {
      res.json({ exists: false }); 
  }
};
export const getUserCountByHobby = (req: Request, res: Response) => {
  const { hobby } = req.params;
  const usersWithHobby = data.filter(user => user.hobbies.includes(hobby));
  
  res.json({
      hobby,
      count: usersWithHobby.length
  });
};


