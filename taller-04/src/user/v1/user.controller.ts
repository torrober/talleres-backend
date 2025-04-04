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

export const getFreeTimeUsers = (req: Request, res: Response) => {
  const usersWithFreeTime = data.filter(user => user.hobbies.length < 3);

  if (usersWithFreeTime.length > 0) {
      res.json(usersWithFreeTime);
  } else {
      res.status(404).json({ message: 'No hay usuarios con tiempo libre' });
  }
};
export const addHobbyToUser = (req: Request, res: Response) => {
  const { codigo } = req.params;
  const { hobby } = req.body;

  const userIndex = data.findIndex(user => user.codigo === codigo);
  
  if (userIndex === -1) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const user = data[userIndex];
  
  if (user.hobbies.length >= 3) {
      return res.status(400).json({ 
          message: 'El usuario ya tiene 3 hobbies, no se pueden agregar más' 
      });
  }

  if (user.hobbies.includes(hobby)) {
      return res.status(400).json({ 
          message: 'El usuario ya tiene este hobby' 
      });
  }

  user.hobbies.push(hobby);
  res.json({ 
      message: 'Hobby agregado exitosamente',
      user 
  });
};
export const registerUser = (req: Request, res: Response) => {
  const { codigo, nombre, apellido, hobbies } = req.body; 
  if (!codigo || !nombre || !apellido || !hobbies) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
  } else {
    if(hobbies.length<2) {
      return res.status(400).json({ message: "El usuario no puede tener menos de 2 hobbies" });
    } else {
      const newUser = { codigo, nombre, apellido, hobbies };
      res.status(201).json(newUser); 
    }
  }
};