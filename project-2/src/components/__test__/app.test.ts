import axios from "axios";


const testAxiosInstance = axios.create(
    {
    baseURL: "https://gitlab.stud.idi.ntnu.no/api/v4/projects/17434/",
    timeout: 3000,
    headers:{
        Authorization: "Bearer glpat-2t5FVWJaUJ6uHTjjzWLP"
    }
    }
)

describe('Test api', () => {

    test('response code 200', async () => {
        const responseCode = await testAxiosInstance.get("") 
        expect(responseCode.status).toBe(200);
      });
  })

