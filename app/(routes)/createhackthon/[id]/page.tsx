'use client';
import { CreateHackthon } from '@/components/hackthon/create-form';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    async function Editable() {
      try {
        const res = await axios.get(`/api/${params.id}`);
        setEdit(res.data?.res);
      } catch (e) {
        console.log(e);
      }
    }
    if (params.id) {
      Editable();
    }
  }, []);

  return <CreateHackthon edit={edit} />;
};

export default Page;
