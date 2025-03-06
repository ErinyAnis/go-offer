import BrandsSlider from "./BrandsSlider"
import Container from "./Container"
import MainTitle from "./ui/MainTitle"


const Brands = () => {
  return (
    <section className="sec-padding bg-pink-50">
        <Container>
            <div className="text-center mb-10">
                <MainTitle text="Shop by brands" />
            </div>
            <BrandsSlider />
        </Container>
    </section>
  )
}

export default Brands