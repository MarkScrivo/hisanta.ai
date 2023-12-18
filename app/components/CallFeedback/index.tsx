import { useEffect, useState } from 'react';
import { CharacterType } from '@/lib/types';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import EpicButton from '../Buttons';
// Removed unused imports since thumbs up/down are no longer needed
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { ShareCheckbox, SharingDialogContent } from '../Sharing';
import { datadogRum } from '@datadog/browser-rum';

// Removed GoodBadSelector function

function FeedbackForm({
  onFeedbackInput,
  onEmailInput,
}) {
  // Return only the necessary input fields, removing the Accordion
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-2">
      <Textarea
        className="font-[Inter-Regular]"
        placeholder="Your feedback here"
        onInput={(e) => onFeedbackInput((e.target as HTMLTextAreaElement).value)}
      />
      <Input
        className="font-[Inter-Regular]"
        type="text"
        placeholder="Your email (optional)"
        onInput={(e) => onEmailInput((e.target as HTMLInputElement).value)}
      />
    </div>
  );
}

export function CallFeedback({
  character,
  open,
  onOpenChange,
  onFeedback,
  duration,
  conversationId,
  roomName,
}) {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const { sharingEnabled } = useFlags();
  const [shareClicked, setShareClicked] = useState(false);
  const [sharing, setSharing] = useState(false);

  useEffect(() => {
    setFeedback('');
    setEmail('');
    setShareClicked(false);
    setSharing(false);
  }, [open]);

  const redirectToFeedbackURL = () => {
    window.location.href = 'https://meetings.hubspot.com/efrank2';
  };

  const handleFeedback = () => {
    onFeedback({ feedback, email });
    if (sharingEnabled === true && shareClicked && conversationId) {
      datadogRum.addAction('share-selected', {
        conversationId: conversationId || '',
        roomName: roomName || '',
      });
      setSharing(true);
    } else {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {sharingEnabled && sharing && roomName ? (
        <SharingDialogContent duration={duration} roomName={roomName} character={character} onClose={() => onOpenChange(false)} />
      ) : (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-Holiday-Green text-4xl text-center">
              Thanks for chatting with <span className="text-Holiday-Red">{character.name}</span>
            </DialogTitle>
            <DialogDescription>
              <div className="mx-auto w-full flex flex-col gap-4">
                <div className="mx-auto font-[Inter-Regular] text-sm">Your feedback will help make HiSanta better</div>
                <FeedbackForm onEmailInput={setEmail} onFeedbackInput={setFeedback} />
                {sharingEnabled === true && roomName && duration && duration > 0 && (
                  <div className="w-full">
                    <ShareCheckbox checked={shareClicked} onCheckedChange={setShareClicked} />
                  </div>
                )}
                <EpicButton className="w-full" onClick={redirectToFeedbackURL}>
                  Send Feedback
                </EpicButton>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      )}
    </Dialog>
  );
}
