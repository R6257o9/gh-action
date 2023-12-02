import dotenv from "dotenv";

dotenv.config();

const hello = () => {
  const name = process.env.USERNAME;
  const language = process.env.LANGUAGE;
  console.log(`Hey ${name} from GitHub`);
  console.log(`Favorite Language: ${language}`);
};
hello();
