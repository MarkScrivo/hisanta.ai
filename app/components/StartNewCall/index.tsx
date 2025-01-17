'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CharacterType } from '@/lib/types';
import EpicButton from '../Buttons';
import { useRouter } from 'next/navigation';

const StartNewCall = ({
  character,
  onCallStart,
  startCallEnabled,
  onDebugOpen,
  showBio,
}: {
  character: CharacterType;
  onCallStart: () => void;
  startCallEnabled: boolean;
  onDebugOpen: () => void;
  showBio?: boolean;
}) => {
  const router = useRouter();
  const [taps, setTaps] = useState(0);

  const onMakeCall = () => {
    console.log('Making call');
    onCallStart();
  };

  const handleTap = () => {
    setTaps(taps + 1);
    if (taps >= 4) {
      onDebugOpen();
      setTaps(0);
    }
  };

  const homeLink = character.bad ? '/?nice=0' : '/';

  return (
    <div className="bg-White-75 rounded-jumbo border-black border flex flex-col mx-auto md:mt-4 gap-2 w-[340px] h-[600px] justify-start">
      <div className="mt-4 mx-auto text-3xl text-[#881425]">{character.name}</div>
      {/* Only show the bio if it's short. */}
      {showBio && character.bio.length < 200 && <div className="mx-4 text-center">{character.bio}</div>}
      <div className="mx-auto mt-16">
        <Image
          className="drop-shadow-md"
          src={`/images/${character.image}`}
          alt={`${character.name} image`}
          width={200}
          height={2000}
          onClick={handleTap}
        />
      </div>
      <div className="my-auto h-full" />
      <div className="mx-4 flex flex-col">
        {startCallEnabled ? (
          <div className="w-full">
            <EpicButton disabled={!startCallEnabled} onClick={onMakeCall} type="primary" className="w-full">
              Call {character.name}
            </EpicButton>
          </div>
        ) : (
          <div className="rounded-full align-middle justify-center w-full flex flex-row mx-auto border border-Holiday-Green p-4">
            <div className="text-lg color-Holiday-Green">Dialing {character.name}...</div>
          </div>
        )}
      </div>
      <div className="m-4">
        <EpicButton onClick={() => window.location.href='https://meetings.hubspot.com/efrank2'} type="secondaryGreen" className="w-full">
  Book a Meeting
</EpicButton>
      </div>
    </div>
  );
};

export default StartNewCall;
