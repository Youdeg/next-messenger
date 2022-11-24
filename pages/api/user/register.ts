import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password } = req.body;

    const data = await prisma.user.findFirst({
        where: {
            OR: [{ name }, { email }]
        }
    })

    if (data) {
        return res.status(400).json({ message: "name/email is already exists." })
    }

    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
    const hashPassword = bcrypt.hashSync(password, salt);

    await prisma.user.create({
        data: { name, email, password: hashPassword }
    })

    return res.status(200).json({ message: "Успешно!" });
}