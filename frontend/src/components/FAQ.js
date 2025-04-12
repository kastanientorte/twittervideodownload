import React, { useState } from 'react';

const FAQ = () => {
  // State to manage which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Comprehensive FAQ data from the provided HTML
  const faqs = [
    {
      question: "How to download Twitter videos in mp4 format?",
      answer: "You can download the twitter videos and GIFs by copying the video and GIF address and paste it in our input box, click the download button then a page appears with the video that have Download Video button from which you can select the mp4 format and finally click the download video button."
    },
    {
      question: "Do your testers tested out their site of twitter downloader?",
      answer: "Yes, they have tested the website of Twitter Video Download for downloading the videos and GIFs of twitter."
    },
    {
      question: "How do I find the unique URL of a tweet?",
      answer: "The unique URL of a tweet can be found by a right click on the video, copy from the address bar or through share icon by selection of copy link to tweet option."
    },
    {
      question: "Is this twitter downloader free?",
      answer: "Yes, twitter downloader is completely free to download the twitter videos and GIFs secure and fast alternative of savetweetvid."
    },
    {
      question: "How to download Twitter video on android phone?",
      answer: "Open your browser and go to Twitter Video Downloader then paste the video URL or GIF URL into the input box and click the download video button."
    },
    {
      question: "Does this twitter downloader have a limit?",
      answer: "No. there is no limit to Download twitter video and GIFs."
    },
    {
      question: "How to save a GIF or video from twitter?",
      answer: "Save the twitter videos by simply copying the video address and pasting it in our twitter Gif downloader input area that's it. download will start automatically."
    },
    {
      question: "Where is my video saved after downloading from this twitter to mp4 downloader?",
      answer: "The downloaded twitter videos are saved on the download folder in the default storage of your device."
    }
  ];

  // Toggle accordion open/closed
  const toggleAccordion = (index) => {
    setOpenAccordion(prevOpen => prevOpen === index ? null : index);
  };

  return (
    <section className="bg-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="font-bold text-2xl uppercase bg-gradient-to-r from-[#009ffd] to-[#7878be] bg-clip-text text-transparent">
            Frequently Asked Questions (FAQ's)
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Accordion Header */}
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 flex justify-between items-center 
                  bg-gradient-to-r from-[#009ffd] to-[#7878be] bg-clip-text text-transparent 
                  hover:bg-opacity-80 transition-colors duration-300"
              >
                <span className="font-semibold text-base">
                  Q. {faq.question}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transform transition-transform duration-300 
                    ${openAccordion === index ? 'rotate-180' : ''}`} 
                  viewBox="0 0 16 16" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>

              {/* Accordion Body */}
              <div 
                className={`
                  px-4 py-3 text-sm text-gray-700 bg-white
                  transition-all duration-300 ease-in-out
                  ${openAccordion === index ? 'block' : 'hidden'}
                `}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;