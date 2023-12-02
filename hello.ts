import dotenv from "dotenv";

dotenv.config();

const hello = () => {
  const name = process.env.USERNAME;
  console.log(`Hey ${name} from GitHub`);
};
hello();
