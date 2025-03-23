
import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient for 3 years",
    image: "/placeholder.svg",
    content: "The dental team here is amazing! They made my dental anxiety disappear with their gentle approach and clear explanations. My smile has never looked better!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "New Patient",
    image: "/placeholder.svg",
    content: "As someone who dreaded dental visits, I was pleasantly surprised by the comfortable experience. The staff took time to understand my concerns and made sure I was relaxed throughout my procedure.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Patient for 5 years",
    image: "/placeholder.svg",
    content: "I've been coming here for years and have always received exceptional care. The entire team is professional, friendly, and truly cares about their patients' wellbeing. Highly recommended!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  
  const setSlide = (index: number) => {
    setActiveIndex(index);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  
  useEffect(() => {
    if (!sliderRef.current) return;
    
    const slideWidth = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: activeIndex * slideWidth,
      behavior: 'smooth'
    });
  }, [activeIndex]);
  
  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [activeIndex]);
  
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-dental-blue bg-opacity-5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-dental-blue bg-opacity-20 text-dental-blue text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in providing exceptional dental care. Here's what our patients have to say about their experiences with us.
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-3d p-8 relative transition-all duration-300 hover:shadow-3d-hover">
                    <div className="absolute top-8 right-8 text-dental-blue opacity-30">
                      <Quote size={48} />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dental-blue">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover blur-load"
                            onLoad={(e) => e.currentTarget.classList.add('loaded')}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-dental-blue">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-gray-600 italic">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-dental-red hover:bg-dental-red hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg text-dental-red hover:bg-dental-red hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-dental-red w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
