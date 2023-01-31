import axios from "../config/plugin/axios";

const getUser = async (user: string) => {
  const response = await axios.get(`/${user}`);
  return response;
};

export default getUser;
