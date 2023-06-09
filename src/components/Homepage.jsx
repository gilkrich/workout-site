import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
import heroimg from './images/heropageimg.jpg'
import blonde from './images/blonde.jpg'
import men from './images/men.jpg'
import lift from './images/lift.png'
import idea from './images/idea.png'
import food from './images/food.png'
import WorkoutCard from './WorkoutCard'
import "./homepage.css"
const Homepage = ({ workoutData }) => {
  return (
    <div>
      <img src={heroimg} alt="" width='100%' height='730px' />
      <div className='hero-container'>
        <h1 className='hero-header'>Ignite Your Potential. Transform Your Body</h1>
        <h3 className='hero-sub-text'>Unleash the Power Within and Discover the Strength of Your Journey</h3>
        <Link to="workouts">
          <button className='hero-button'>Take a look at our programs</button>
        </Link>
      </div>
      <div className='ad-section'>
        <img src={blonde} alt="" className='ad-image' />
        <div className='ad-text-side'>
          <div className='ad-text-container'>
            <h2>weight training</h2>
            <p className='ad-text'>Ignite your strength and transform your body with our revolutionary weight training programs.Unleash your full potential as our expertly crafted workouts maximize muscle development and boost physical performance.Sculpt your physique and achieve a leaner body composition.Elevate your confidence and mental well-being as you experience the empowering effects of weight training, releasing endorphins and fostering a positive mindset.</p>
          </div>
          <div className='ad-text-container'>
            <h2>general fittnes</h2>
            <p className='ad-text'>Embark on a journey to holistic well-being with our comprehensive general fitness programs.Unlock the power of a healthy heart and vibrant cardiovascular system as you engage in invigorating exercises that elevate your endurance, and reduce the risk of chronic conditions through our dynamic general fitness routines that enhance your longevity and overall quality of life.</p>
          </div>
        </div>
      </div>
      <div className='ad-section-two'>
        <img src={men} alt="" className='ad-image' />
        <div className='ad-text-side'>
          <div className='ad-text-container'>
            <h2>Strength and Conditioning</h2>
            <p className='ad-text'>Unleash your inner athlete with our dynamic strength and conditioning programs. Whether you're a seasoned competitor or just starting your fitness journey, our workouts are designed to optimize athletic performance and build functional strength. From powerlifting and Olympic weightlifting to speed and agility drills, our comprehensive training approach will help you surpass your fitness goals. Elevate your performance, increase your power output, and become the best version of yourself in every athletic endeavor.</p>
          </div>
          <div className='ad-text-container'>
            <h2>Functional Training</h2>
            <p className='ad-text'>Unlock your body's true potential and improve your everyday movement patterns with our functional training programs. Our workouts focus on enhancing your overall strength, stability, and mobility, allowing you to perform daily tasks with ease and efficiency. Through a combination of compound exercises, balance training, and core strengthening, you'll develop functional strength that translates into real-life activities. Experience the freedom of a fully functional body and embrace a more active and fulfilling lifestyle.</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className='why-us-header'>Why Us?</h1>
        <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>With Us!</h2>
        <div className='why-us-container'>
          <div className='why-us-item'>
            <img src={lift} alt="" className='why-us-image' />
            <h2 className='why-us-text'>Experience the benefits of our workout website with meticulously planned workouts crafted by professionals who understand how to maximize your results.</h2>
          </div >
          <div className='why-us-item'>
            <img src={food} alt="" className='why-us-image' />
            <h2 className='why-us-text'>Achieve optimal nutrition and fuel your body with our well-built diets, carefully curated to support your fitness goals and enhance your overall well-being</h2>
          </div>
          <div className='why-us-item'>
            <img src={idea} alt="" className='why-us-image' />
            <h2 className='why-us-text'>Enjoy the convenience of our workout website, where you'll find a wide range of easy-to-follow exercise routines that are both effective and enjoyable</h2>
          </div>
        </div>
      </div>
      <div className='most-popular'>
        <h1>most popular workouts right now</h1>
        <div className='popular-cards'>
          {workoutData && workoutData.filter(item => item.name == "Advanced Bodyweight Workout" || item.name == "Beginner Cable Workout" || item.name == "Beginner Barbell Workout").map((item, index) => {
            console.log(item);
            return (  
                <WorkoutCard key={index}
                  image={item.img}
                  name={item.name}
                  goal={item.goal}
                  difficulty={item.level}
                  exercises={item.exercises}
                  equipment={item.equipment}
                  number = {0}
                />
            )
          }
          )}
        </div>
      </div>
      <div className='pepole-ranks'>
        <div className='ranks-header'>
          Customer Testimonials: Hear What Others Say About Our Workouts!
          <img src="https://img.freepik.com/premium-vector/man-character-thinking_155707-268.jpg?w=360" alt="" className='thinking-person' />
        </div>
        <div className='ranks-content'>
          <div className='ranks1'>
            <img src="https://img.freepik.com/premium-vector/5-star-rating-customer-product-review-flat-icons-apps-websites-vector-isolatd-white-background_117553-862.jpg?w=2000" alt="" className='stars' />
            <h4>Liam</h4>
            <img className='ranks-images' src="https://img.freepik.com/free-photo/close-up-handsome-businessman-black-suit-smiling-amazed-showing-number-four-standing-white-background_1258-64877.jpg?w=2000" alt="" />
            <h4>"Great workouts for all levels!"</h4>
          </div>
          <div className='ranks2'>
            <img src="https://img.freepik.com/premium-vector/5-star-rating-customer-product-review-flat-icons-apps-websites-vector-isolatd-white-background_117553-862.jpg?w=2000" alt="" className='stars' />
            <h4>Noah</h4>
            <img className='ranks-images' src="https://img.freepik.com/free-photo/smilin-man-thinking_1149-1327.jpg?w=2000" alt="" />
            <h4>"Improved strength and endurance."</h4>
          </div>
          <div className='ranks3'>
            <img src="https://img.freepik.com/premium-vector/5-star-rating-customer-product-review-flat-icons-apps-websites-vector-isolatd-white-background_117553-862.jpg?w=2000" alt="" className='stars' />
            <h4>Emma</h4>
            <img className='ranks-images' src="https://www.seekpng.com/png/detail/400-4008759_you-purchase-a-hotel-room-from-the-developer.png" alt="" />
            <h4>"Engaging community aspect."</h4>
          </div>
          <div className='ranks4'>
            <img src="https://img.freepik.com/premium-vector/5-star-rating-customer-product-review-flat-icons-apps-websites-vector-isolatd-white-background_117553-862.jpg?w=2000" alt="" className='stars' />
            <h4>Sophia</h4>
            <img className='ranks-images' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58DwUXmIJqdyC4ErLE-RpM-0e5x6EYPBLhA&usqp=CAU" alt="" />
            <h4>"Highly recommended!"</h4>
          </div>
          <div className='ranks5'>
            <img src="https://img.freepik.com/premium-vector/5-star-rating-customer-product-review-flat-icons-apps-websites-vector-isolatd-white-background_117553-862.jpg?w=2000" alt="" className='stars' />
            <h4>Ava</h4>
            <img className='ranks-images' src="data:image/jpeg;base64,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" alt="" />
            <h4>"Game-changer for my routine."</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
