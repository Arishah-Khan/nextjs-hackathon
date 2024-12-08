import React from 'react';

interface Button {
  text: string;
  bg: string;
}

export default function Button({ text, bg }: Button) {
  return (
    <div>
      <button
        className={`px-8 py-2 bg-[${bg}] text-white rounded-full border-2 border-[#e6891a] hover:bg-[#e6891a] focus:outline-none`}
      >
        {text}
      </button>
    </div>
  );
}
