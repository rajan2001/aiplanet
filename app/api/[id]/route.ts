import { Challenges } from '@/lib/db/model';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const res = await Challenges.findById({ _id: params.id });
    return Response.json({ res });
  } catch (error: any) {
    console.log(error.message);

    return Response.json({ message: 'Failed to get challenges!!' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await Challenges.findByIdAndDelete(params.id);
    return Response.json({ message: 'Challenge deleted' });
  } catch (error: any) {
    console.log(error.message);

    return Response.json({ message: 'Failed to get challenges!!' }, { status: 500 });
  }
}

interface Challenge {
  name?: string;
  startdate?: string;
  enddate?: string;
  description?: string;
  image?: string;
  level?: string;
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { name, startdate, enddate, description, image, level }: Challenge = await request.json();
  try {
    await Challenges.findByIdAndUpdate(params.id, {
      name,
      startdate,
      enddate,
      level,
      image,
      description,
    });
    return Response.json({ message: 'Challenge Updated successfully!!' });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ message: 'Failed to update challenge!!' }, { status: 500 });
  }
}
