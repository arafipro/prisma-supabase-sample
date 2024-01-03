import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
  }
};
