export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback,
) => {
  if (!file) return callback(new Error('File is empty'), false);

  const fileExtention = file.mimetype.split('/')[1];
  const validExtentions = ['jpg', 'jpeg', 'png', 'gif'];
  if (validExtentions.includes(fileExtention)) {
    return callback(null, true);
  }
  callback(null, false);
};
