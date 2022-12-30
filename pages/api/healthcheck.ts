import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: "OK";
};

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ status: "OK" });
}
