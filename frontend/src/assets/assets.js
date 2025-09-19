import appointment_img from './plumberr.png'
import header_img from './header_imggg.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './Logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import plu1 from './Plumber1.jpg'
import plu2 from './Plumber2.jpg'
import plu3 from './Plumber3.jpg'
import pai1 from './Painter1.jpg'
import pai2 from './Painter2.jpg'
import pai3 from './Painter3.jpg'
import car1 from './Carpainter1.jpg'
import car2 from './Carpainter2.jpg'
import car3 from './Carpainter3.jpg'
import ele1 from './Electric1.jpg'
import ele2 from './Electric2.jpg'
import ele3 from './Electric3.jpg'
/*import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'*/
import carpenter from './carpenter.png'
import plumber from './plumberr.png'
import painter from "./painter.png";
import electrician from './engineering.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Plumber',
        image: plumber
    },
    {
        speciality: 'Painter',
        image: painter
    },
    {
        speciality: 'Carpenter',
        image: carpenter
    },
    {
        speciality: 'Electricaion',
        image: electrician
    },
   /* {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },*/
]

export const Services = [
    {
        _id: 'plu1',
        name: 'Raju Patel',
        image: plu1,
        speciality: 'Plumber',
        experience: '4 Years',
        about: 'Raju Patel is a skilled plumber with 4 years of experience in handling residential and commercial plumbing needs. He is known for quick diagnosis and efficient repair of water leakages, pipe fittings, and drainage issues.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Junagadh'
        }
    },
    {
        _id: 'pai1',
        name: ' Ramesh Verma',
        image: pai1,
        speciality: 'Painter',
       
        experience: '2 Years',
        about: 'Ramesh Verma is an experienced painter specializing in interior and exterior wall painting. He uses high-quality paints and ensures a clean, smooth finish every time.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'car1',
        name: 'Mohan Chavda',
        image: car1,
        speciality: 'Carpenter',
      
        experience: '4 Years',
        about: 'Mohan Chavda is a professional carpenter known for his custom furniture designs, door fittings, and modular kitchen installations.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ele1',
        name: 'Ketan Rana',
        image: ele1,
        speciality: 'Electricaion',
       
        experience: '2 Years',
        about: 'Ketan Rana handles all types of electrical work including wiring, switchboards, fan installation, and fault fixing with safety and precision.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'plu2',
        name: 'Mehesh Bhai',
        image: plu2,
        speciality: 'Plumber',
        experience: '3 Years',
        about: 'Mahesh Bhai has over 6 years of experience in solving plumbing problems with speed and precision. He specializes in bathroom fittings, kitchen pipelines, and emergency water leak repairs.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'plu3',
        name: 'Vikram Solanki',
        image: plu3,
        speciality: 'Plumber',
        
        experience: '1 Years',
        about: 'Vikram Solanki offers reliable plumbing services with a customer-friendly approach. He has 5 years of experience in pipe installations, drainage cleaning, and regular plumbing maintenance for homes and offices.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    
    {
        _id: 'pai2',
        name: 'Bhavesh Joshi',
        image: pai2,
        speciality: 'Painter',
        
        experience: '4 Years',
        about: 'Bhavesh Joshi offers painting services for homes, offices, and commercial spaces. Known for his attention to detail, he delivers long-lasting and vibrant finishes.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'pai3',
        name: 'Satish Parmar',
        image: pai3,
        speciality: 'Painter',
        
        experience: '4 Years',
        about: 'Satish Parmar brings 6 years of experience in decorative wall painting, texture work, and waterproofing solutions. He guarantees quality and customer satisfaction.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    
    {
        _id: 'car2',
        name: ' Devraj Makwana',
        image: car2,
        speciality: 'Carpenter',
        
        experience: '3 Years',
        about: 'Devraj Makwana provides reliable carpentry services including repairs, wooden partitions, and bed/wardrobe construction for homes and offices.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'car3',
        name: ' Jayesh Vora',
        image: car3,
        speciality: 'Carpenter',
      
        experience: '1 Years',
        about:'Jayesh Vora has a strong reputation for fine craftsmanship and durable furniture. He takes on both small repairs and large-scale furniture projects.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    
    {
        _id: 'ele2',
        name: 'Manish Chauhan',
        image: ele2,
        speciality: 'Electricaion',
        
        experience: '4 Years',
        about: 'Manish Chauhan is an expert in both residential and commercial electrical setups. He’s known for neat work and using high-quality materials.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'ele3',
        name: 'Nilesh Joshi',
        image: ele3,
        speciality: 'Electricaion',
        
        experience: '4 Years',
        about: 'Nilesh Joshi provides fast and reliable service for all kinds of electrical repairs, AC fittings, and inverter installations.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
  /*  {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },*/
]