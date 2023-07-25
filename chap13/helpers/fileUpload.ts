// @ts-ignore
import multer from "multer";

const MIME_TYPE_MAP: { [key: string]: string } = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

// @ts-ignore
const fileUpload = multer({
  limits: 50000,
  storage: multer.diskStorage({
    // @ts-ignore
    destination: (req, file, cb) => {
      cb(null, "/public/images");
    },
    // @ts-ignore
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, file.originalname + "-" + Date.now() + "." + ext);
    },
    // @ts-ignore
    fileFilter: (req, file, cb) => {
      const isValid = !!MIME_TYPE_MAP[file.mimetype];
      let error = isValid ? null : new Error("Invalid mime type!");
      cb(error, isValid);
    },
  }),
});

export default fileUpload;

// TODO: Add more helper functions here. This is just a starting point.
