import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Props = {
  //params: { id: string };
  params: Promise<{ id: string }>;
};
export async function GET(req: NextRequest, { params }: Props) {
  try {
    const id = (await params).id;
    const idCapteur = parseInt(id);
    const capteur = await prisma.capteurData.findUnique({
      where: { id: idCapteur },
    });
    return NextResponse.json(capteur);
  } catch (error) {
    return NextResponse.json(error);
  }
}
