import dotenv from "dotenv";

dotenv.config();

const boostrap = () => {
  const name = process.env.USERNAME;
  console.log(`Hello ${name} from GitHub!`);
};
boostrap();
