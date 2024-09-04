import dbConnection from '@/lib/db/connect';
import { Challenge, Challenges } from '@/lib/db/model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  await dbConnection;
  const data = (await request.json()) as Challenge;
  try {
    await Challenges.create(data);
    return NextResponse.json({ message: 'Challenge created successfully!!' }, { status: 201 });
  } catch (error: any) {
    console.log(error.message, 'POST_CHALLENGE');
    return NextResponse.json({ message: 'Failed to create challenge' }, { status: 401 });
  }
}

export async function GET(request: NextRequest) {
  await dbConnection;

  try {
    const res = await Challenges.find({});
    return NextResponse.json({ message: res }, { status: 200 });
  } catch (error: any) {
    console.log(error.message, 'GET_CHALLENGE');
    return NextResponse.json({ message: 'Failed to get challenges' }, { status: 401 });
  }
}
