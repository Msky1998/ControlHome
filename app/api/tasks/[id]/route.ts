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
    const idTask = parseInt(id);
    const task = await prisma.task.findUnique({
      where: { id: idTask },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(error);
  }
}
