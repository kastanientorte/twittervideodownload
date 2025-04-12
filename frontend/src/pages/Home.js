import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import DownloadForm from '../components/DownloadForm';
import InfoSection from '../components/InfoSection';
import AdditionalInfoSection from '../components/AdditionalInfoSection';
import StepsSection from '../components/StepsSection';
import GuideSection from '../components/GuideSection';
import MethodSection from '../components/MethodSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => (
  <>  
    <Navbar/>
    <Header />
    <DownloadForm />
    <InfoSection
      title="Download Twitter Video and GIFs"
      text="Twitter is a social media networking website that has gained widespread popularity among people all over the globe. There is a massive amount of videos, GIFs, links and hashtags that have been shared by millions of individual users. We are making things easier for you by providing you with our online free Twitter video downloader so users can download their favorite twitter videos and GIFs with high quality definition through our twitter video downloader HD."
      imgSrc="assets/img/twitter-video-download.png"
      imgAlt="Download twitter video and GIFs"
    />
    <AdditionalInfoSection />
    <StepsSection />
    <GuideSection />
    <MethodSection />
    <FAQ />
    <Footer />
  </>
);

export default Home;
