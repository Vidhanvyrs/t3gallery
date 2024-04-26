// "use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import SimpleUploadButton from "./simple-upload-button";

export function TopNav() {
  //to refresh the page once you upload
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          /> */}
          {/* this imageUploader is directly coming from core.ts and if that is changed then it will give here type error to us */}
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
