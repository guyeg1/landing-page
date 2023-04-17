import React, { useState } from 'react';
import { Container } from '../../atoms/Container';
import { Paragraph } from '../../atoms/Typography';
import { Apple, Google } from '../../molecules/AppStoreButton';
import Link from 'next/link';

export const Footer = () => {
  const [thisYear] = useState(new Date().getFullYear());
  return (
    <footer className="pt-12 pb-6">
      <Container>
        <div className="relative m-auto flex w-full flex-col">
          <div className="flex flex-row justify-between">
            <div>
              <Paragraph className="pb-3 text-xs font-medium uppercase text-gray-500">
                Services
              </Paragraph>
              <ul>
                <li>
                  <Paragraph className="flex cursor-pointer pb-2 hover:text-primary-500">
                    <Link href="/">Home</Link>
                  </Paragraph>
                </li>
                <li>
                  <Paragraph className="flex cursor-pointer pb-2 hover:text-primary-500">
                    <Link href="/privacy-policy">Privacy</Link>
                  </Paragraph>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <Apple
                onClick={() =>
                  window.open(
                  )
                }
              />
              <Google
                onClick={() =>
                  window.open(
                    
                  )
                }
              />
            </div>
          </div>

          <div className="mt-6 flex flex-row justify-between">
            <div>
              <Paragraph>© {thisYear} ExamApp. All Rights Reserved.</Paragraph>
            </div>
            <div className="flex">
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
