import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback,
) => {
  if (!file) return callback(new Error('File is empty'), false);
  const fileExtention = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtention}`;
  callback(null, fileName);
};
