import dotenv from "dotenv";

dotenv.config();

const hello = () => {
  const name = process.env.USERNAME;
  console.log(`Hello ${name} from GitHub`);
};
hello();
