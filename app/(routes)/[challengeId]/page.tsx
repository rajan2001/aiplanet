import { ChallengePage } from '@/components/preview/challenge-page';

const Page = ({ params }: { params: { challengeId: string } }) => {
  return <>{params.challengeId && <ChallengePage id={params.challengeId} />}</>;
};

export default Page;
