import axios, { AxiosResponse } from 'axios';

interface Response extends AxiosResponse {
  data: { clientID: number; accountID: number; balance: number };
}

export default async function GetBalanceByClientID({
  clientID,
}: {
  clientID: number;
}): Promise<{ clientID: number; accountID: number; balance: number }> {
  const response: Response = await axios.get(
    `http://localhost:3334/balance/${clientID}`,
  );

  return response.data;
}
