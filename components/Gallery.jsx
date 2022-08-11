import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/rdx9bi9zimfafgrs8oee.png',
      thumbnail: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/ivcb9ag7qpfk5tskbze2.png',
      thumbnailLoading: 'lazy',
    },
    {
      original: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/tn7opmolbbahewellepe.png',
      thumbnail: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/f7zkh6vfesnsakfcbavs.png',
      thumbnailLoading: 'lazy',

    },
    {
      original: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/mfb9cepfpkc3dn9uopua.png',
      thumbnail: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/djo6xmeah8ci76xhfrmv.png',
      thumbnailLoading: 'lazy',

    },
    {
      original: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/tx2ssr898wl83wbyfq8c.png',
      thumbnail: 'https://res.cloudinary.com/da-b-martinez/image/upload/v1660212871/mmrorouw56scndgno4z1.png',
      thumbnailLoading: 'lazy',

    },
  ];

const Gallery = () => {
  return (
    <ImageGallery additionalClass='' items={images} autoPlay/>
  )
}

export default Gallery