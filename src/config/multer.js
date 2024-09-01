import multer from 'multer'
import { extname } from 'node:path'
import { v4 } from 'uuid'

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      // Altera o destino para o diretório /tmp
      callback(null, '/tmp')
    },
    filename: (request, file, callback) => {
      // Gera um nome de arquivo único usando UUID
      const uniqueName = v4() + extname(file.originalname)
      callback(null, uniqueName)
    },
  }),
}
