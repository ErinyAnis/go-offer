import Container from "./Container";
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section className="testimonials sec-padding lg:min-h-[70vh]">
      <Container>
        <div className="relative w-full lg:flex justify-center">
          <TestimonialsSlider />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
