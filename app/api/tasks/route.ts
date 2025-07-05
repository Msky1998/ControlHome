import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();
//GET
export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { error: "Failed to fetch tasks" + error },
      { status: 500 }
    );
  }
}
export async function POST(req: NextRequest) {
  try {
    const { name, description } = await req.json();

    if (!name && !description) {
      return NextResponse.json({
        error: "name et description doivent etre non nul",
      });
    }
    const newTask = await prisma.task.create({
      data: { name, description },
    });
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error("Error adding task:", error);
    return NextResponse.json(
      { error: "Failed to add task " + error },
      { status: 500 }
    );
  }
}
