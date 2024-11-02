"use client";
interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Digital Marketer",
    image: "/images/user1.jpg",
    review: "This site has helped me find amazing products that increased my revenue significantly. Highly recommended!"
  },
  {
    id: 2,
    name: "Michael Lee",
    title: "Freelance Blogger",
    image: "/images/user2.jpg",
    review: "I love the curated product recommendations here! They're all high quality and really easy to promote."
  },
  {
    id: 3,
    name: "Sarah Williams",
    title: "E-commerce Expert",
    image: "/images/user3.jpg",
    review: "I’ve tried multiple affiliate sites, but this one stands out for its top-notch product selections and reliable payouts."
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What People Are Saying</h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
              <p className="mt-4 text-gray-600">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
