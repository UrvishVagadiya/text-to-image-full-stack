import logo from './logo.webp'
import credit_star from './credit_star.webp'
import user from './user.webp'
import star_icon from './star_icon.webp'
import sample_img_1 from './sample_img_1.avif'
import sample_img_2 from './sample_img_2.avif'
import facebook_icon from './facebook_icon.webp'
import twitter_icon from './twitter_icon.webp'
import instagram_icon from './instagram_logo.webp'
import cross_icon from './cross_icon.webp'

export const stepsData= [
  {
title:'Describe Your Vision',
description: 'Type a phrase, sentence, or paragraph that descrines the image you want to create.',
  },
{
  title: 'Watch the Magic',
  description: 'Our AI-powered engine will transfrom your text into a high-quality, unique image in seconds.',
},
{
  title: 'Download & Share',
  description: 'Instantly download your creation or share it with teh world directly from our platform.',
}
]

export const testimonialsData = [
  {
    name: "Donald Jackman",
    role: "Graphic Designer",
    stars: 5,
    text: "I have been using bg.removal for nearly teo years,primarily for Instagram,ansd it has been incredinbly user-friendly, making my work much easier.",
  },
  {
    name: "Sophia Martinez",
    role: "UI/UX Designer",
    stars: 4,
    text: "I have been using bg.removal for nearly teo years,primarily for Instagram,ansd it has been incredinbly user-friendly, making my work much easier.",
  },
  {
    name: "Ethan Walker",
    role: "Content Creator",
    stars: 5,
    text: "I have been using bg.removal for nearly teo years,primarily for Instagram,ansd it has been incredinbly user-friendly, making my work much easier.",
  },
];

export const plans=[
    {
        id:'Basic',
        price:10,
        credits:100,
        desc:'Best for personal use.'
    },
    {
        id:"Advanced",
        price:50,
        credits:500,
        desc:"Best for business use."
    },
    {
        id:'Business',
        price:250,
        credits:5000,
        desc:"Best for enterprise use."
    }
]

export const assets={
  logo,
  credit_star,
  user,
  star_icon,
  sample_img_1,
  sample_img_2,
  facebook_icon,
  twitter_icon,
  instagram_icon,
  cross_icon
}