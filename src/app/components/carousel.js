"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/page.module.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function Carousel() {
  const images = [
    '/p1.jpg',
    '/p2.jpg',
    '/p4.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
        <div className={styles.arrow} onClick={prevSlide}><LeftOutlined /></div>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`image${index}`}
                    width={500}
                    height={500}
                    style={{ display: index === currentSlide ? 'block' : 'none', borderRadius: 10 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            ))}
    <div className={styles.arrow} onClick={nextSlide}><RightOutlined/></div>
</div>
);
}






