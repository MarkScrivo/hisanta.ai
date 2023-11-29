import Image from 'next/image';
import './globals.css';

export const metadata = {
  title: 'Fixie | Voice',
  description: 'Fixie Voice is a platform for building conversational voice AI experiences.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
      <body className="" >
        <div className="">
          <header className="text-center text-lg mt-4">hisanta.ai</header>
          <section>
            {children}
          </section>
          {/* <main className="flex min-h-screen flex-col items-start px-4 lg:px-24 py-6">{children}</main> */}
          <div className="flex flex-row justify-center">
            <div className="text-sm text-center text-black font-['Inter-SemiBold']">A Holiday Experiment by &nbsp;</div>
            <Image
              src="/images/FixieLogo.svg"
              alt="Fixie Logo"
              width={60}
              height={20}
            />
          </div>
        </div>
        
      </body>
      
    </html>
  );
}
