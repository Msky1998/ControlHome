import { PrismaClient } from "@/app/generated/prisma";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();
//GET
export async function GET() {
  try {
    const capteurs = await prisma.capteurData.findMany();
    return NextResponse.json(capteurs);
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
    const { device, temperature, smoke, flame, alert } = await req.json();

    if (!device) {
      return NextResponse.json({
        error: "le device doit etre non nul",
      });
    }
    const newCapteur = await prisma.capteurData.create({
      data: {
        device,
        temperature,
        smoke,
        flame,
        alert,
      },
    });
    return NextResponse.json(newCapteur, { status: 201 });
  } catch (error) {
    console.error("Error adding task:", error);
    return NextResponse.json(
      { error: "Failed to add task " + error },
      { status: 500 }
    );
  }
}
