import axios from "axios";

const API_HOST = "http://localhost:3000";

const promocoesApi = {

  buscarPromocoes: async () => {
    const res = await axios.get(API_HOST + "/promocoes");
    return res.data;
  },

};

export default promocoesApi;
